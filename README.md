# arcsettlement.com

Independent domain acquisition landing page. Plain HTML/CSS and a small optional email configuration script. No dependencies, build step, analytics, backend, or form collection.

## Edit contact details

Set `contactEmail` in `public/config.js` to the owner's public inquiry email. The page shows a clear placeholder until configured. Do not add secrets to this file. The configured CTA opens the visitor's email app.

## GitHub Pages

Create a public repository named `arcsettlement-site`, upload this directory's contents, and use the `main` branch. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included workflow publishes only `public/`. Verify a successful deployment under Actions and use the URL reported by the deployment. No custom domain is set automatically.

## Cloudflare Pages

Connect this repository to Cloudflare Pages. Select branch `main`, framework preset **None**, build command `exit 0`, build output directory `public`, and leave the root directory at the repository root. The exact same static files deploy to either host.

To serve `arcsettlement.com`, add it under the project's **Custom domains** and follow Cloudflare's verification and DNS instructions. For an apex domain on Pages, the domain must be a zone in the same Cloudflare account and use Cloudflare nameservers. Complete the custom-domain flow before changing DNS; remove conflicting records only after reviewing them. Optionally add `www.arcsettlement.com` and redirect it to the apex through Cloudflare. Verify HTTPS and both hostnames after DNS activation. No DNS records or nameservers have been changed by this source package.

If using a GitHub Pages custom domain instead, verify ownership and set it through **Settings → Pages** after reviewing the registrar/DNS state. Do not point the same hostname to both hosts.

## Local preview

Serve `public/` with a static HTTP server, or open `public/index.html` directly. All assets use relative URLs and work with a GitHub project-site subpath.

## Official deployment references

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

## Content boundaries

The page presents a domain for acquisition and four illustrative future uses. It does not represent an operating financial service or claim affiliation with Circle, Arc Network, or similarly named organizations. No price, ownership certificate, customer claims, or trademark rights are implied.
