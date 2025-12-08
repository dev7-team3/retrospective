import dayjs from 'dayjs'

import broadcast from '~/modules/broadcast'

export default async function main() {
    const issueCreateURL = [
        `https://github.com/dev7-team3/retrospective/issues/new`,
        [
            `title=${`${dayjs().format('YYYY-MM-DD')} XXX 회고`}`,
            `labels=회고`,
            `template=회고-템플릿.md`,
        ].map(item => item.split('=').map(encodeURIComponent).join('=')).join('&')
    ].join('?')

    const message = [
        `오늘을 되돌아 보아요 👀`,
        issueCreateURL
    ].join('\n')

    await broadcast(message)

    return 0
}

main()
