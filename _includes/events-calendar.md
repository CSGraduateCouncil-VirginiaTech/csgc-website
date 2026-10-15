### Add our events to your calendar

Stay in the loop! Add the CS Grad Council events calendar to your favorite calendar app to keep track of meetings, coffee hours, and social events alongside your own schedule. New events and schedule changes will update automatically as your app refreshes.

<link rel="stylesheet" href="{{ '/assets/css/events-calendar.css' | relative_url }}">
<script src="{{ '/assets/js/events-calendar.js' | relative_url }}" defer></script>

<div class="events-calendar" data-events-calendar>
  <label for="calendar-subscription-url"><strong>1. Copy our calendar subscription link</strong></label>
  <div class="calendar-copy-row">
    <input id="calendar-subscription-url" type="text" readonly aria-label="CS Grad Council calendar subscription URL" value="https://outlook.office365.com/owa/calendar/b8071a67a1c24b52a753aa284f291979@vt.edu/717f20ee3f524f04a19da13090be229f14179372062621915594/calendar.ics">
    <button type="button" data-copy-calendar>Copy link</button>
  </div>
  <p class="calendar-copy-status" role="status" aria-live="polite"></p>
  <p><strong>2. Choose your calendar and follow the steps</strong></p>
  <div class="calendar-tabs" role="tablist" aria-label="Choose your calendar app" hidden>
    <button type="button" id="calendar-tab-google" role="tab" aria-selected="true" aria-controls="calendar-panel-google" tabindex="0">Google Calendar</button>
    <button type="button" id="calendar-tab-outlook" role="tab" aria-selected="false" aria-controls="calendar-panel-outlook" tabindex="-1">Outlook</button>
    <button type="button" id="calendar-tab-mac" role="tab" aria-selected="false" aria-controls="calendar-panel-mac" tabindex="-1">Apple Calendar<br>(Mac)</button>
    <button type="button" id="calendar-tab-ios" role="tab" aria-selected="false" aria-controls="calendar-panel-ios" tabindex="-1">Apple Calendar<br>(iPhone / iPad)</button>
  </div>
  <div class="calendar-panel" id="calendar-panel-google" role="tabpanel" aria-labelledby="calendar-tab-google" tabindex="0">
    <h4>Google Calendar</h4>
    <ol>
      <li>Open Google Calendar in a web browser on a computer.</li>
      <li>Next to <strong>Other calendars</strong>, click <strong>+ → From URL</strong>.</li>
      <li>Paste the subscription link and click <strong>Add calendar</strong>.</li>
    </ol>
    <p>Once added, the calendar will also appear in your Google Calendar mobile app. <a href="https://support.google.com/calendar/answer/37100?hl=en">Google Calendar help</a></p>
  </div>
  <div class="calendar-panel" id="calendar-panel-outlook" role="tabpanel" aria-labelledby="calendar-tab-outlook" tabindex="0">
    <h4>Outlook on the web</h4>
    <ol>
      <li>Open Calendar in Outlook on the web.</li>
      <li>Choose <strong>Add calendar → Subscribe from web</strong>.</li>
      <li>Paste the subscription link, name it <strong>CS Grad Council</strong>, and click <strong>Import</strong>.</li>
    </ol>
    <p><a href="https://support.microsoft.com/en-us/outlook/import-or-subscribe-to-a-calendar-in-outlook-com-or-outlook-on-the-web">Outlook help</a></p>
  </div>
  <div class="calendar-panel" id="calendar-panel-mac" role="tabpanel" aria-labelledby="calendar-tab-mac" tabindex="0">
    <h4>Apple Calendar on Mac</h4>
    <ol>
      <li>Open Calendar and choose <strong>File → New Calendar Subscription</strong>.</li>
      <li>Paste the subscription link and click <strong>Subscribe</strong>.</li>
      <li>Name it <strong>CS Grad Council</strong>, choose an auto-refresh interval, and click <strong>OK</strong>.</li>
    </ol>
    <p><a href="https://support.apple.com/en-us/102301">Apple Calendar help</a></p>
  </div>
  <div class="calendar-panel" id="calendar-panel-ios" role="tabpanel" aria-labelledby="calendar-tab-ios" tabindex="0">
    <h4>Apple Calendar on iPhone or iPad</h4>
    <ol>
      <li>Open Calendar and tap <strong>Calendars → Add Calendar → Add Subscription Calendar</strong>.</li>
      <li>Paste the subscription link and tap <strong>Find</strong> (or <strong>Subscribe</strong> on older versions).</li>
      <li>Name it <strong>CS Grad Council</strong> and follow the prompts to save it.</li>
    </ol>
    <p><a href="https://support.apple.com/en-us/102301">Apple Calendar help</a></p>
  </div>
  <noscript><p>Select and copy the link above, then follow the instructions for your calendar below.</p></noscript>
</div>

Subscribe using the link so you receive future events and updates. A one-time file import won't stay in sync. Changes may take time to appear as your calendar app refreshes.
