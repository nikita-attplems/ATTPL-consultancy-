// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async ({ requestLocale }) => {
//     const locale = (await requestLocale) ?? "en";

//     return {
//         locale,
//         messages: (await import(`./messages/${locale}.json`)).default,
//     };
// });


// src/i18n/request.ts

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
    return {
        locale: "en",
        messages: (await import("./messages/en.json")).default
    };
});