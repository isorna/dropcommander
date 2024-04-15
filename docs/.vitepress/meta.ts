/** package info */
export const APP_VERSION = JSON.stringify(process.env.npm_package_version)

/** basic site info */
export const name = `Drop Commander v${APP_VERSION.replace(/"/g, '')}`
export const site = '/'
export const siteEN = `${site}/en/`
export const siteES = `${site}/es/`
export const logo = `${site}img/android-chrome-192x192.png`
export const keywords = 'dropzone, drofleet, striketeam, commander, ttcombat'
export const descriptionEN = `TTCombat's Drop Commander Universe online tools.`
export const descriptionES = 'Herramientas online para el universo Drop Commander de TTCombat'

/** social links */
export const ogTitle = 'Drop Commander'
export const ogImg = `${site}/img/og.png`
export const ogImgEN = `${site}/img/og.png`
export const ogImgES = `${site}/img/ogES.png`
export const github = 'https://github.com/isorna/dropcommander'
export const twitterHandle = 'isorna'
export const twitter = `https://twitter.com/${twitterHandle}`

/** site search console  */
export const googleVerify = 'P09VtEEM5j5h3oN7hbLXafuch3xqhfkB0ka0DcAUr7k'

/** gooogle analytics */
export const gtag = 'G-7TPL19MF6Q'

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')