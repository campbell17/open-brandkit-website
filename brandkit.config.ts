import { defineBrandKitConfig } from 'open-brandkit'

export default defineBrandKitConfig({
  "brand": {
    "name": "Open BrandKit",
    "shortName": "OBK",
    "description": "Approved assets, colors, avatars, and social banners for Open BrandKit."
  },
  "route": "/brandkit",
  "logos": {
    "sourceDir": "public/logos",
    "groups": [
      {
        "key": "logo-lockups",
        "label": "Logo Lockups",
        "match": [
          "logo"
        ],
        "description": "Primary logo lockups in approved colorways."
      },
      {
        "key": "wordmarks",
        "label": "Wordmarks",
        "match": [
          "wordmark",
          "word-mark",
          "word"
        ],
        "description": "Text-first marks for wide placements."
      },
      {
        "key": "icons",
        "label": "Icons",
        "match": [
          "icon",
          "symbol",
          "favicon",
          "brand-mark"
        ],
        "description": "Symbol-only marks for compact surfaces."
      }
    ]
  },
  "colors": {
    "sources": [
      {
        "type": "markdown-table",
        "path": "docs/brand-colors.md"
      }
    ]
  },
  "socialBanners": {
    "markVariants": [
      {
        "key": "logo",
        "label": "Logo",
        "assetPath": "public/logos/open-brandkit-logo.svg",
        "colorAssets": {
          "default": "public/logos/open-brandkit-logo.svg",
          "black": "public/logos/open-brandkit-logo-black.svg",
          "white": "public/logos/open-brandkit-logo-white.svg"
        },
        "colorKeys": [
          "default",
          "black",
          "white"
        ],
        "colorOptions": [
          {
            "hex": "#4d8293",
            "key": "default",
            "label": "Default"
          },
          {
            "hex": "#05070b",
            "key": "black",
            "label": "Black"
          },
          {
            "hex": "#ffffff",
            "key": "white",
            "label": "White"
          }
        ],
        "scale": 0.34
      },
      {
        "key": "icon",
        "label": "Icon",
        "assetPath": "public/logos/open-brandkit-icon.svg",
        "colorAssets": {
          "default": "public/logos/open-brandkit-icon.svg",
          "black": "public/logos/open-brandkit-icon-black.svg",
          "white": "public/logos/open-brandkit-icon-white.svg"
        },
        "colorKeys": [
          "default",
          "black",
          "white"
        ],
        "colorOptions": [
          {
            "hex": "#e85454",
            "key": "default",
            "label": "Default"
          },
          {
            "hex": "#05070b",
            "key": "black",
            "label": "Black"
          },
          {
            "hex": "#ffffff",
            "key": "white",
            "label": "White"
          }
        ],
        "scale": 0.18
      }
    ],
    "colors": [
      {
        "key": "primary",
        "label": "OBK Teal",
        "hex": "#4d8293"
      },
      {
        "key": "accent",
        "label": "OBK Open",
        "hex": "#e85454"
      },
      {
        "key": "light",
        "label": "OBK Plum",
        "hex": "#914d84"
      }
    ],
    "presets": [
      {
        "key": "x-profile-header",
        "label": "X / Twitter profile header",
        "width": 1500,
        "height": 500,
        "backgroundColor": "primary",
        "accentColor": "accent",
        "markColor": "default",
        "secondaryColor": "light",
        "pattern": "diagonal-sweep"
      },
      {
        "key": "linkedin-personal-background",
        "label": "LinkedIn personal background",
        "width": 1584,
        "height": 396,
        "backgroundColor": "primary",
        "accentColor": "accent",
        "markColor": "default",
        "secondaryColor": "light",
        "pattern": "radial-glow"
      },
      {
        "key": "linkedin-organization-cover",
        "label": "LinkedIn organization cover",
        "width": 4200,
        "height": 700,
        "backgroundColor": "primary",
        "accentColor": "accent",
        "markColor": "default",
        "secondaryColor": "light",
        "pattern": "wave"
      },
      {
        "key": "facebook-page-cover",
        "label": "Facebook page cover",
        "width": 851,
        "height": 315,
        "backgroundColor": "primary",
        "accentColor": "accent",
        "markColor": "default",
        "secondaryColor": "light",
        "pattern": "split-field"
      }
    ]
  }
})
