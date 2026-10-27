import type { Rewrite } from "next/dist/lib/load-custom-routes";

const PREFIX = "/base-commerce";

function trimOrigin(value: string | undefined): string | null {
  const trimmed = value?.trim().replace(/\/+$/, "");
  return trimmed || null;
}

/**
 * BC-S11.8 — proxy `/base-commerce/*` to Vercel deployments of Base Commerce.
 * Requires env origins on the site-echannel project (see `.env.example`).
 * Static files under `public/base-commerce/` are served before rewrites.
 */
export function baseCommerceRewrites(): Rewrite[] {
  const apiOrigin = trimOrigin(process.env.BASE_COMMERCE_API_ORIGIN);
  const adminOrigin = trimOrigin(process.env.BASE_COMMERCE_ADMIN_ORIGIN);
  const storefrontOrigin = trimOrigin(
    process.env.BASE_COMMERCE_STOREFRONT_ORIGIN,
  );

  if (!apiOrigin || !adminOrigin || !storefrontOrigin) {
    return [];
  }

  return [
    {
      source: `${PREFIX}/api/:path*`,
      destination: `${apiOrigin}${PREFIX}/api/:path*`,
    },
    {
      source: `${PREFIX}/admin/:path*`,
      destination: `${adminOrigin}${PREFIX}/admin/:path*`,
    },
    {
      source: `${PREFIX}/admin`,
      destination: `${adminOrigin}${PREFIX}/admin`,
    },
    {
      source: `${PREFIX}/:path*`,
      destination: `${storefrontOrigin}${PREFIX}/:path*`,
    },
    {
      source: PREFIX,
      destination: `${storefrontOrigin}${PREFIX}`,
    },
  ];
}
