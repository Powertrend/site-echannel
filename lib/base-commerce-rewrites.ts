import type { Rewrite } from "next/dist/lib/load-custom-routes";

const PREFIX = "/base-commerce";

function trimOrigin(value: string | undefined): string | null {
  const trimmed = value?.trim().replace(/\/+$/, "");
  return trimmed || null;
}

/**
 * BC-S11.8 — proxy `/base-commerce/*` to Vercel deployments of Base Commerce.
 * Requires env origins on the site-echannel project (see `.env.example`, `docs/VERCEL-PRODUCTION-BASE-COMMERCE.md`).
 * API and admin rewrites work without storefront origin.
 * Static files under `public/base-commerce/` are served before rewrites.
 */
export function baseCommerceRewrites(): Rewrite[] {
  const apiOrigin = trimOrigin(process.env.BASE_COMMERCE_API_ORIGIN);
  const adminOrigin = trimOrigin(process.env.BASE_COMMERCE_ADMIN_ORIGIN);
  const storefrontOrigin = trimOrigin(
    process.env.BASE_COMMERCE_STOREFRONT_ORIGIN,
  );

  if (!apiOrigin && !adminOrigin && !storefrontOrigin) {
    return [];
  }

  const rewrites: Rewrite[] = [];

  if (apiOrigin) {
    rewrites.push({
      source: `${PREFIX}/api/:path*`,
      destination: `${apiOrigin}${PREFIX}/api/:path*`,
    });
  }

  if (adminOrigin) {
    rewrites.push(
      {
        source: `${PREFIX}/admin/:path+`,
        destination: `${adminOrigin}${PREFIX}/admin/:path+`,
      },
      {
        source: `${PREFIX}/admin`,
        destination: `${adminOrigin}${PREFIX}/admin`,
      },
      {
        source: `${PREFIX}/admin/`,
        destination: `${adminOrigin}${PREFIX}/admin`,
      },
    );
  }

  if (storefrontOrigin) {
    rewrites.push(
      {
        source: `${PREFIX}/:path+`,
        destination: `${storefrontOrigin}${PREFIX}/:path+`,
      },
      {
        source: PREFIX,
        destination: `${storefrontOrigin}${PREFIX}`,
      },
    );
  }

  return rewrites;
}
