/**
 * settings.js
 *
 * The settings contained in file are used to define the project specific settings required for
 * the landing page to be fully functional. These settings are used throughout the core JavaScript
 * and defined here to be easily updatable.
 *
 * Each variable below has a short explanation of how to use it and is covered fully in the documentation.
 */

/**
 * Chapter settings used to build the StateMap, which maps video states to friendly names.
 *
 * Within each "chapter" one or more states can exist. The state "name" links to the "data-state" attribute in the
 * HTML code of the page. The state "cardId" corresponds to the states id in the EngageOne Video Director.
 *
 * All videos have an END state, this should not be defined here as it is an implicit construct.
 */
var chapterSettings = {
  welcome: [
    {
      name: "welcome",
      cardId: "START"
    }
  ],
  "grow-revenue": [
    {
      name: "grow-revenue",
      cardId: "1376da70"
    }
  ],
  "lower-costs": [
    {
      name: "lower-costs",
      cardId: "a66a6c18"
    }
  ],
  "customer-experience": [
    {
      name: "customer-experience",
      cardId: "13c65e12"
    }
  ],
  close: [
    {
      name: "closing-summary",
      cardId: "eb0b5178"
    }
  ]
};

/**
 * Settings for the Social Icons, which appear at the top or bottom of the page depending on the screen width.
 *
 * "position" can be set to either "left" or "right", and specifies which side the social icons will appear on
 * non-mobile breakpoints.
 *
 * "icons" can be set to a list of icons to display. The key for each icon should match the CSS modifier
 * in the form of '.social__icon--key'.
 *
 * Within each icon object;
 *      "url" sets the link the icon will open.
 *      "text" sets the alternate text used on screen-readers by default
 */
var socialIconSettings = {
  position: "right",
  icons: {
    facebook: {
      url: "https://www.facebook.com/DialogGroep/",
      text: "Facebook"
    },
    twitter: {
      url: "https://twitter.com/DocumentDialog",
      text: "Twitter"
    },
    googleplus: {
      url: "https://www.linkedin.com/company/42289/ ",
      text: "LinkedIn"
    },
    // "googleplus": {
    //     "url": "https://plus.google.com",
    //     "text": "Google+"
    // },
    email: {
      url:
        "mailto:connect@dialoggroep.eu?subject=Bericht%20over%20EngageOne%20Video",
      text: "Email"
    },
    link: {
      url: "https://documentdialog.eu/interactieve-gepersonaliseerde-video/",
      text: "Website"
    }
  }
};

/**
 * Settings for the CTA buttons. Each button can either have a "card" or "url" property to define its function.
 *
 * "card" buttons activate a side card that is defined in the video project. This property should have the value
 * of the target cards id from the Interactions Manager in the EOV Director.
 *
 * "url" buttons will open the specified URL in a new window/tab when clicked
 */
var ctaButtonSettings = {
  button1: {
    card: "f6320cf9"
  },
  button2: {
    url: "https://dialoggroep.eu/"
  },
  button3: {
    url:
      "mailto:connect@dialoggroep.eu?subject=Bericht%20over%20EngageOne%20Video"
  },
  button4: {
    card: "a81a318f"
  },
  button5: {
    url: "https://dialoggroep.eu/"
  }
};

/**
 * Settings for the promo graphic sections. Each promo graphic requires the following:
 *
 * "trackingName" to define how clicks on it will be tracked within the EngageOne Video platform
 * "url" to go to when the promo is clicked
 */
var promoSettings = {
  promo1: {
    trackingName: "Document Dialog",
    url: "https://documentdialog.eu/"
  },
  promo2: {
    trackingName: "CCM Masters",
    url: "https://www.ccmmasters.eu/"
  }
};

/**
 * Settings for the timeline where chapters and progress are displayed.
 *
 * "SeenChaptersEnabled" gives the option to change the text color of chapters that have been viewed (using the
 *    '.timeline-chapters--seen' CSS class)
 * "ContrastProgressBarEnabled" enables the contrast progress bar on the timeline (using the '.timeline-contrast'
 *    and '.timeline-contrast-hover' CSS classes)
 * "BufferBarEnabled" enables the buffering bar section of the timeline
 * "ClosedCaptionsSupported" enables the closed caption option in the settings menu
 * "MultiLanguageSupported" enables the language selection option in the settings menu
 */
var timelineSettings = {
  SeenChaptersEnabled: false,
  ContrastProgressBarEnabled: false,
  BufferBarEnabled: true,
  ClosedCaptionsSupported: true,
  MultiLanguageSupported: true
};
