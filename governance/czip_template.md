| Layout | Title | Excerpt | Catergories | Tags | date | author |
|--------|-----------------------|--------------------------------------------------------------------------------------|:---------------------------:|:-------------------------------:|------------|-------------------|
| Page | "Community ZIP Guide" | "step-by-step explanation of how to write a ZIP. It supplements the ECC's ZIP guide" | processes and documentation | [zip] [process] [documentation] | 2019-07-28 | Sonya & Mistfpga |

Welcome to the ZIP process! Thank you for participating in Zcash governance.

This is a step-by-step explanation of how to write a ZIP. It supplements the [ZIP guide](https://github.com/zcash/zips/blob/master/zip-guide.rst) and [ZIP 0](https://github.com/zcash/zips/blob/master/zip-0000.rst) (which documents the ZIP process in detail).

## What are ZIPs?


ZIP stands for Zcash Improvement Proposal, and writing one is how you formally suggest changes to the Zcash protocol, or a decision about Zcash’s future that you want to be recognized and recorded.

ZIPs are debated extensively by the community, and carefully considered by representatives of the Zcash Foundation and the Electric Coin Company.

There are two ZIP editors, appointed to make joint decisions about which ZIPs to include or reject. One ZIP editor represents ZF (currently George Tankersley) and one represents ECC (currently Daira Hopwood). ZIPs that are approved by both active editors will become part of Zcash.

## Before you start writing...

Find out what the Zcash community thinks before you write and submit a ZIP! That will help you create a better ZIP, based on people’s feedback and suggestions. You may find collaborators who want to help you with the ZIP. (Collaboration is encouraged but certainly not required — solo ZIPs are just as legitimate.)

Explain what you think should happen, how it should work, and why you think it’s important. Often, people will disagree with you — it’s important to hear them out and understand their objections, even if you don’t change your mind.

Here are the best places to discuss ZIP ideas:

* The Zcash Community Forum, in the [protocol section of the Community Collaborations category](https://forum.zcashcommunity.com/c/community-collaboration/protocol).
* The [#zcash channel](https://chat.zcashcommunity.com/channel/zcash) of the Zcash Community Chat.

You will have to create an account for the forum and an account for the chat, if you haven’t already signed up.

A relevant note from the “ZIP Workflow” section of [ZIP 0](https://github.com/zcash/zips/blob/master/zip-0000.rst#zip-workflow):

> Vetting an idea publicly before going as far as writing a ZIP is meant to save both the potential Owner and the wider community time. Asking the Zcash community first if an idea is original helps prevent too much time being spent on something that is guaranteed to be rejected based on prior discussions (searching the internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the Owner. Just because an idea sounds good to the Owner does not mean it will work for most people in most areas where Zcash is used.

## What goes into a ZIP/CZIP?

Some of these sections differ slightly in requirements from that of the ZIP template. This is to help the community help you. 

If you have confusion the zip template is the cannancoical version.

The ZIP process is the required ECC process. the CZIP process is a community and foundation driven process to make ZIPS more accessable.


> The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL"


Have special meaning and people should familiarise themselves with it. - https://tools.ietf.org/html/rfc2119

So The header is pretty much ZIP0 with a bit extra.

### CZIP Header and description of fields
ZIP: unassigned
Title: My Community ZIP
__Owner: mistfpga (zcash forums)__ 
ZIP Status: Draft
__Community Status: Request for comments : @  LINK TO DISCUSSION THREAD__
Category: Process
Created: 2019-07-17
License: CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike 4.0) [3]

- Owner has to either be a github account, email address or forum account where the person can be contacted about their proposal. It shouldn't  require personally identifiable information
- Status is always Draft until it is accepted
- Community Status, what part of the process is this zip at.  
  - Request for comments
  - Request for proposal
  - Request for technical review
  - Final
- Discussion: Needs to include a link to the forum thread for discussion.
- Category: As defined by ZIP0
- Created: date of creation
- License: This has to be one of the licences outlined in ZIP0 if in doubt, "CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike 4.0"


The changes are : 
 - Adds extra fields Community Status and Discussion 
 - Redefines owner
 - Redefines ZIP to be CZIP - This is to indicate that it is community driven and may need extra help.
 
The Community Status is to let the community know what stage the proposer is at with the proposal.  Whilst being in any stage, all comments are welcome, but it would probably serve the ECC, foundation and communities time a little better if they know what is expected of them in a reply.

### The overall format for the czip should be something like:

1. Header + 
2. Terminology +
3. Out of Scope +
4. Abstract/Spirit *
5. Motivation *
6. Requirements *&
7. Specification *&
8. Further discussion needed on *&
  - Further discussion +
  - Raised objections and issues. &
  - Implications to other users. &
  - Any process concerns or areas you would like help *
  - Technical/Code implementation/implication &
9. Technical/Code implementation/implication

stuff marked with * really need to be in the OP as a starting point for a czip

stuff marked with + is a nice to have, but this will change over the course of the czip.

stuff marked with & is either stuff based off community feedback so not realistic to expect in the OP but is needed for the Final.

Dont worry about the mandatory fields, just put in what you can, the community/foundation will help you with the rest, even the mandatory stuff.

Section 9 is probably out of scope for most czips and better handled by the zip process.  Maybe use this space for usecases or to show what bits of your suggestion are already implemented either on other projects or zcash.

###  2 Terminology
 - RFC 2119 language MUST be used when expressing the requirements, capital letters MUST be used for the key word.  They MAY be used in other parts of the proposal, if so it MUST to be indicated with capital letters. 
 - Any extra information that might need clarification.  This will probably keep getting updated as people give feedback.

### 3 Out of Scope SHOULD use 2119 Language
 - Anything that is explicitly not covered by the proposal.
 - Should get updated with feedback from the community.

### 4 Abstract/Spirit: SHOULD NOT be bullet pointed, but MAY be bullet pointed.
- A short statement of what the zip is about.
- A short statement that emphasises what the proposer is trying to achieve with the zip.

### 5 Motivation: SHOULD NOT be bullet pointed, but MAY be bullet pointed.

A few short statements explaining your motivation for creating the zip. This may overlap with Spirit but it is not the same thing.

### 6 Requirements: (SHOULD be paragraphs  but MAY be bullet pointed it MAY use 2119 language. MAY be paragraphs)

 - This is one of the most important sections for the ECC
 - Try to make this as detailed as possible.
 - Do not include things that should be part of the specification.
 - Try to explain what the situation is now and why your zip is needed.
 - This section can be hard, but is very important. Don't worry about getting it right first time. the community is here to help you with this.
 - If you use paragraphs please remember that things do get lost in translation, you might end up bullet pointing you paragraphs. then turning them back to paragraphs for the zip process.
 
### 7 Specification: MUST be bullet pointed MUST use 2119 language
 - Detailed list of what the change MUST/MUST not do. using 2119 language
 - Keep to 1 point per line only. This is to make it easier for translation
 - You can mix 2119 language in the same bullet point, but grammar might become an issue. try to keep it simple
 - If in doubt use one line for the MUST and another for the SHOULD or MAY
 - Again this can be tricky. It is better to be vague or say you don't know and ask for community help.

### 8 Issues & Further Discussion 
   - Further discussion needed on :
   - no guidelines on this section.
   - it is freeform.
   - Use it to ask questions of your own CZIP
   - Use it to solicit specific requests for comments on certain issues
   - Use it to highlight areas you are unsure of.
   - bullet points and paragraphs are cool.

### - Raised objections and issues:
- This will be an evolving part of the document and so it might be better suited to paragraphs or bullet points.
- Objections should be bullet pointed wherever possible and addressed if possible.

### - Implications to other users. MAY use 2119 language
 - This will be an evolving part of the document and so it might be better suited to paragraphs or bullet points. This will need regular updates and engagement from the proposer/advocate.

### - Is for any concerns or areas you would like help

- This again is free form.  Please use this space to request for help for things you do not understand, would like someone else to do really anything related to the _process_ of making the zip rather than the contents of the zip (that is section 7a)

### 9 Technical/Code implementation/implication

This is very hard for the non zcash specialist programmer to know. The best I think we can do in this regard is maybe use this section for usecases and usescases that address objections in section 8.

---
## Suggested headers for OP

>No idea is a bad idea, all ideas from all skill levels welcome - do not be afraid if you think your post is stupid or you don't understand the format. 

>We are friendly here and will help you if you engage with the community.  This section is operated on a good faith questioning basis.  Moderators police this section heavily to keep it as open and inclusive to new idea as possible.

>People questioning your proposals are doing so to help either clarify them or help you improve upon them, they are not criticisms of you.  We value talk about ideas in this section not talk about the person.

> The ECC and Foundation read these threads and will if appropriate offer advice or ask questions.
