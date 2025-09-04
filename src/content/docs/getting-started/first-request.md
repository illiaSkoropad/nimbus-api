---
title: Quick Start Guide
description: Learn how to make your first successful request to the Nimbus API.
---

Welcome to the Nimbus API! This guide will walk you through the essential steps to get your first piece of weather data. Let's get started.

## Step 1: Get Your API Key

Before you can make a request, you need a unique **API Key**. This key authenticates your requests and tracks your usage.

You can find your API Key in your [Developer Dashboard](https://example.com/dashboard) after signing up. Keep it safe and don't share it publicly.

## Step 2: Make Your First Request

The easiest way to test your key is to request the current weather for a city. We'll use Kyiv for this example.

Construct a URL like the one below, replacing `YOUR_API_KEY` with the key you obtained in the previous step. Then, open it in your browser or use a tool like Postman to make a **GET request**.

```bash
https://api.nimbus.com/v1/weather/current?city=Kyiv&key=YOUR_API_KEY
```

You will receive a JSON response from the server, which should look like this:

```json
{
  "request_time": "2025-09-04T10:00:00Z",
  "city": "Kyiv",
  "temperature_celsius": 22,
  "condition": "Mostly Sunny",
  "wind_kph": 12,
  "humidity_percent": 65
}
```

## Step 3: Parse the JSON Response

Now that you have the data, you need to parse it in your application to use it. JSON is supported by virtually all modern programming languages.

Here's a simple example in JavaScript of how you can convert the JSON string into an object and access its properties:

```javascript
const jsonResponse = `{
  "request_time": "2025-09-04T10:00:00Z",
  "city": "Kyiv",
  "temperature_celsius": 22,
  "condition": "Mostly Sunny",
  "wind_kph": 12,
  "humidity_percent": 65
}`;

// Parse the JSON string into a JavaScript object
const weatherData = JSON.parse(jsonResponse);

// Now you can easily access the data
console.log(
  `The temperature in ${weatherData.city} is ${weatherData.temperature_celsius}°C.`
);
// Expected output: The temperature in Kyiv is 22°C.
```

Congratulations! You've successfully retrieved and parsed your first weather data from the Nimbus API.

## What's Next?

Now that you've got the basics down, check out our [API Reference](https://git.qix.sx/next-dev-illia-skoropad/nimbus-api) to explore all the data you can get.
