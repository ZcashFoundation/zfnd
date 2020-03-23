---
layout: post
title: "Let's Develop Decentralized, Privacy-Preserving Contact Tracing"
excerpt: "A call-to-action to develop a decentralized, privacy-preserving contact tracing protocol for COVID-19 response."
categories: blog
tags: []
date: 2020-03-23
author: hdevalence
image:
  feature: surely-the-fire-department.jpg
---

Over the last few months and especially the last few weeks, the spread of
COVID-19 has created a massive health crisis at global scale.  Healthcare
infrastructure is being overwhelmed around the world.  While data about the
spread of the virus and its effects are still uncertain, projections about the
potential effects of unchecked spread are dire.

Unfortunately, institutional failings have hampered the response to the
outbreak of the virus.  For instance, Chinese authorities responded to reports
of a potential SARS outbreak in early January by [arresting eight people for
"spreading rumors"][wuhan_police].  The World Heath Organization announced in
mid-January that there was [no evidence of human-to-human
transmission][who_h2h], ignoring warnings from [Taiwanese health
authorities][taiwan_cdc] sent in December. (Taiwan, which has not had an
outbreak, is not allowed to participate in the WHO due to political pressure
from China, which views it as a breakaway province).  In the US, the
CDC [prevented testing][cdc_testing] in the early stages of the outbreak while
containment was still possible, and elected officials [dumped millions in
stock][dump_stock] while doing nothing to mobilize resources or prepare a
response.  

However, we can also observe the power of informal information economies,
decentralized responses, and individual actions to step in where institutions
fail.  While the WHO ignored warnings in January, an informal network of
professional and amateur epidemiologists on Twitter and elsewhere tracked the
disease's spread and collected information about the virus.  Public outcry
helped drive a policy reversal in the UK, where the government had planned to
allow the virus to sweep through the population in a plan to ["[create] herd
immunity, protect the economy, and if that means some pensioners die, too
bad"][cummings_strategy] – before belatedly realizing they had done modeling
[based on a different disease][uk_plan] with lower rates of intensive care need
than COVID-19.  

And some of the highest-impact actions have been the result of individual
initiative.  Most notably, the outbreak was initially reported by [Li
Wenliang][li_wenliang], who was reprimanded by police and on state television
for sharing information on the disease with other doctors.  Li contracted
COVID-19 while treating patients, and tragically died a month later.  And
individual researchers with the [Seattle Flu Study][seattle_flu] study, who had
been tracking flu outbreaks, [made the decision][cdc_testing] to test existing
samples for SARS-CoV-2 without authorization.  Before they were ordered to
stop, they discovered evidence that the virus had been circulating undetected
on the west coast for six weeks.  This information may have played a key role
in the early timing of the SF Bay Area's shelter-in-place order.

We are now faced with a global health and economic crisis, which will require
full social mobilization to defeat.  But just as the impact of COVID-19 cuts
across every sector of human activity, so too will the required response,
requiring people to think about how the specialized expertise they have can be
usefully applied to the problem.  We've seen people apply 3D printing expertise
to produce emergency face shields for hospitals, apply logistics expertise to
start spinning up new supply chains, and apply data analysis expertise to make
up-to-the-minute information about the outbreak legible.  But what kind of role
could cryptography usefully play?

One incredibly exciting technological development is
[TraceTogether][tracetogether], a mobile application that assists with contact
tracing produced by the Government of Singapore and the Singapore Ministry of
Health (MoH).  The app creates a temporary ID by encrypting a user ID to a
MoH-owned public key, and then broadcasts the temporary ID over Bluetooth.
This temporary ID is refreshed at regular intervals, so that it cannot be used
as a long-term identifier for third-party tracking.  Nearby mobile devices
running the app log all observed broadcasts.  If a user later develops symptoms
and tests positive for COVID-19, they can upload their log of contacts to the
MoH, who functions as a trusted third party that can decrypt the log entries
and notify all of that user's contacts of potential COVID-19 exposure.  The MoH
promises to use the log data only for the purposes of contact notification.

While this application is not *perfectly* privacy-preserving, it is far
superior to location-tracking, and reveals personal information only upon
infection, rather than using the threat of COVID-19 as a justification to build
permanent surveillance infrastructure, or [exposing patient data to the
public][sk_privacy].  Public health requires public trust, and the developers
should be congratulated for building privacy protections into the system.

Unfortunately, most of the world does not have the Singapore Ministry of
Health. But removing trusted third parties is a fundamental part of
cryptography, and we think this is a problem where the cryptography and privacy
community's skills can be brought to bear.  If we had a decentralized,
privacy-preserving contact tracing protocol, it could be deployed immediately,
without requiring approval or participation of the same institutions that have
been ineffective in responding to the crisis.  We've seen what happened in the
aftermath of other crises, like 9/11, where new surveillance infrastructure
gave more power to the very institutions whose failure created the crisis.  But
we don't have to wait for this to happen and then fight against it.   We can
build the alternatives we want instead:

> We must not forget that we can also build.  We carry a new world here, in our
> hearts.  That world is growing in this minute.

At the Zcash Foundation, we've been thinking of some ways to solve this problem
over the last few days.  If you'd like to help, [come talk with
us][contact-tracing-invite] and help us solve this problem together.

![meme by @ctbeiser](/images/surely-the-fire-department.jpg)

[wuhan_police]: https://web.archive.org/web/20200122072517/https://www.globaltimes.cn/content/1175808.shtml
[who_h2h]: https://twitter.com/WHO/status/1217043229427761152
[taiwan_cdc]: https://www.ft.com/content/2a70a02a-644a-11ea-a6cd-df28cc3c6a68
[cdc_testing]: https://www.nytimes.com/2020/03/10/us/coronavirus-testing-delays.html
[dump_stock]: https://www.propublica.org/article/senator-dumped-up-to-1-7-million-of-stock-after-reassuring-public-about-coronavirus-preparedness
[uk_plan]: https://twitter.com/hancocktom/status/1239669605586604032
[cummings_strategy]: https://twitter.com/johnharris1969/status/1241632642581303296
[seattle_flu]: https://seattleflu.org
[li_wenliang]: https://en.wikipedia.org/wiki/Li_Wenliang
[tracetogether]: https://www.tracetogether.gov.sg/
[contact-tracing-invite]: https://discord.gg/RY4BcFd
[sk_privacy]: https://twitter.com/aprilaser/status/1242104599923785729
