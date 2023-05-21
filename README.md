# @tripathirajan/mail-service

A mail service package for Node.js. Built on the top of NodeMailer and SendGrid.

## Installation

```
npm install @tripathirajan/mail-service
```

## Usage

```javascript
const { MailServiceManager } = require('@tripathirajan/mail-service');
const mailer = MailServiceManager.getInstance();
// html mail
mailer.sendHTMLMail({
    to: "recipient-email",
    from: "sender-email",
    subject: "mail subject",
    body: "mail body"
    callback?: (result, error) => {}
});

// plain text mail
mailer.sendPlainTextMail({
    to: "recipient-email",
    from: "sender-email",
    subject: "mail subject",
    body: "mail body"
    callback?: (result, error) => {}
});
```

Note: make sure you have added SendGrid API key in your `.env` file:

```
SEND_GRID_API_KEY=
```

## Method

- `sendHTMLMail(options: MailOptions)`
- `sendPlainTextMail(options: MailOptions)`

### options: MailOptions

- `to: string`
- `from: string`
- `subject: string`
- `body: string`
- `callback?: (result, error) => {}`
