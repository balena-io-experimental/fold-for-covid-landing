import React from "react";
import {ImageForm} from "@bit/sradevski.balena-image-form.image-form";
import BalenaSdk from 'balena-sdk';
import { Box } from "rendition";

export const sdk = BalenaSdk({
	apiUrl: `https://api.balena-staging.com`,
	isBrowser: true,
});

const deviceType = {
  "slug": "raspberrypi4-64",
  "version": 1,
  "aliases": [
    "raspberrypi4-64"
  ],
  "name": "Raspberry Pi 4",
  "arch": "aarch64",
  "state": "RELEASED",
  "instructions": [
    "Write the OS file you downloaded to your SD card. We recommend using <a href=\"http://www.etcher.io/\">Etcher</a>.",
    "Insert the freshly burnt SD card into the Raspberry Pi 4.",
    "Connect your Raspberry Pi 4 to the internet, then power it up."
  ],
  "gettingStartedLink": {
    "windows": "https://www.balena.io/docs/learn/getting-started/raspberrypi4/nodejs/",
    "osx": "https://www.balena.io/docs/learn/getting-started/raspberrypi4/nodejs/",
    "linux": "https://www.balena.io/docs/learn/getting-started/raspberrypi4/nodejs/"
  },
  "supportsBlink": true,
  "options": [
    {
      "isGroup": true,
      "name": "network",
      "message": "Network",
      "options": [
        {
          "message": "Network Connection",
          "name": "network",
          "type": "list",
          "choices": [
            "ethernet",
            "wifi"
          ]
        },
        {
          "message": "Wifi SSID",
          "name": "wifiSsid",
          "type": "text",
          "when": {
            "network": "wifi"
          }
        },
        {
          "message": "Wifi Passphrase",
          "name": "wifiKey",
          "type": "password",
          "when": {
            "network": "wifi"
          }
        }
      ]
    },
    {
      "isGroup": true,
      "isCollapsible": true,
      "collapsed": true,
      "name": "advanced",
      "message": "Advanced",
      "options": [
        {
          "message": "Check for updates every X minutes",
          "name": "appUpdatePollInterval",
          "type": "number",
          "min": 10,
          "default": 10
        }
      ]
    }
  ],
  "yocto": {
    "machine": "raspberrypi4-64",
    "image": "resin-image",
    "fstype": "resinos-img",
    "version": "yocto-warrior",
    "deployArtifact": "resin-image-raspberrypi4-64.resinos-img",
    "compressed": true
  },
  "configuration": {
    "config": {
      "partition": {
        "primary": 1
      },
      "path": "/config.json"
    }
  },
  "initialization": {
    "options": [
      {
        "message": "Select a drive",
        "type": "drive",
        "name": "drive"
      }
    ],
    "operations": [
      {
        "command": "burn"
      }
    ]
  },
  "buildId": "2.48.0+rev1.prod",
  "logoUrl": "https://files.balena-staging.com/images/raspberrypi4-64/2.48.0%2Brev1.prod/logo.svg"
}


export const DownloadImage = () => {
  return (
    <Box width="50%">
      <ImageForm
        downloadUrl="https://api.balena-cloud.com/download"
        appId={1635296}
        appName="rosetta-at-home-arm"
        sdk={sdk}
        rawVersion={'2.47.1+rev1.prod'}
        deviceType={deviceType}
        getDownloadSize={() => Promise.resolve('')}
        onDownload={() => null}
        setIsDownloadingConfig={() => null}
        configurationComponent={<div></div>}
      />
    </Box>
  );
};
