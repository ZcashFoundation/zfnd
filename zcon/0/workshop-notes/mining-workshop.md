---
layout: page
title: "Mining Workshop"
description: "Crowdsourced notes from the Zcon0 Workshops"
---


MINING WORKSHOP, Tuesday 26 (transcript, names removed).

I want to see some findings aand agreement or description of diagreement of PoW and rewards.

I think it would be highly optimistic if we could come out of this ws with a consensus, but maybe we can come out with an increasing understanding of the mining ecosystem.

Just a hstoricial note- zcash was forked from bitcoin 11.2, bitcoin uses PoW where shaxd idea is hash the block header and there’s a diffcutly filter and if you pass that you can mine a block. Zcash adds this extra step called equihash. Reason was suppose we launch with same mining algo there was this huge base of btc mining hardware and the initial set of miners would have been small competitors. Zcash network would have been vulnerable to attack. We had to do something different from btc. We looked at several memory intensive PoW. less likkely that ppl could do specialized hardware. That was pretty succeful in terms of bootstrapping the network. Any major attakcs from ppl will large portion of th emining power. There is this issue that ppl have worked out how to do asic for equishash. Maybe that specific to the EH algo, or maybe its v difficult to find a PoW algo that is EQ resistance. Find a way forward that specializes all of the computing experts.

Not coming to any decisions but exploring the arugments from all sides.

Why was EH chosen? Asic resistance was a value. Fair mining there's a fairer distrubution of the coins mining in the bedroom i think thats what drives a lot of

Nakamoto consensus depends on the control of the PoW being distributed costs participants that are not likely to collude. Majority blocks being created by one account, they can do roll-backs they can sensor transactions and the whole protocol fails to reach consensus. The idea of N consensus is that more than the certain portion is controlled by one parties.

We had this experience of we decided to do zcash and the ppl involved, miller and nathan and i and a few others had 100 excited ideas about crypto things. Crazy ideas and then we said well let’s just do the one thing adding, shielded tx and copying everything else from bitcoin. We realized that if we copied the PoW from btc it would still be more security. If there’s a bigger coin with the same mining then you’re more vulnerable. Cois that use EQ being attacked and users robbed of millions. Double spends added up to 18 million dollars worth of bitcoin golds. We directly perceived that we would be vulnerable to that. Added z-tx and PoW. tradeoffs with eachother: decentralization, but now 2-3 years later, i think that word is overloaded. Whenever im about to say then i stop and try to think of a better word. A set of miners that is diverse, unlikely to collude, but at that time i was more confused by the set of miners for whom i was giving out free coins.

From systems theory decentralization is the absence of a privileged party. Most users are getting coins, not mining, but getting from an exchange. Distribution of tokens to users through their own efforts is critical imp.

3 years ago i realized that even days thinking i wanted to have a high diversity of hash rates and destination of issuances, and other days low chance of 51%. Then i realized that they’re opposite. Or tradeoffs. Former from low barrier of entry, later high barrier of exit. It’s the lesser point of whether we can get a little bit of 51% attack. Paper: N consensus depends on miners that are unlikely to collude. I agree but, it is impossible to achieve that without a centralized miner gate-keeper. That requirement is unenforcable in a decentralized way, not only unenforcable but also undetectable.

We may move to something else, we may move to some form of PoS or a hybrid or whatever. But while we are using PoW we need to try as hard as possible to make it work property. I was pretty sure that PoW is not the best way to do consensus it is mediocre it has all kinds of problems. It hash high power it is vulnerable to 51% attacks its diversive. You end up with factions that want different things from the protocol we see this with block size debate, and we’re seeing this with zcash its a source of division in the community.

We can’t have both, i’ll chose low barrier of entry for now, bc most imp thing was to get more users engaged with it.this is surely only a temp measure. I thought that, i made a couple of posts in an offhand way. That was my motivation and thinking at the time.

Did you believe that zcash was committed to ASIC resistance when it launched?

We launched believing that asic resistance was not necessarily a value its a tool not a value. Inviting ppl to participate it’s a tool for achieving those true values. We would attempt to maintain that tool. I disagree in retrospect bc tools are tools and we need to switch them up at times.

Flypool has 51 or 55% of the hashpower. That’s down about 20 per cent. Mining pools have often been criticized as an indication of centralization but you can’t tell if they’re colluding.

Maybe this will take the conversation into a diff direction. Zooko has appropiately identified the basic tradeoff. Having a lottery assigning tokens is going to get ppl signing off into pools if the problem is related to monetary policy.  Issuance connected to subsidy for secure network when you should seperate connection of coins from security element of this. Attach a coinbase transaction after a hash of significant difficulty. Payments involved in issuing coins. 2 PoW one for issuance, one for security.

Nakamoto paper simplified lots of things by collapsing different things in the design space. Collapsed a huge design space and one splifications it made was to identity two things that need resistance to spoofing attacks. Different party can pretend to be many different parties and gain a reward associated to being a party. The idea that nakamoto had was to use PoW as that mechanism. It did that by collapsing the PoW needed for blocks with the distribution of coins. IT would be a huge design change to separate those things. Maybe that should be a new coin rather than existing coin with social contract.

5% more efficient that the GPU miner. From the IP company we want to build up our open asic concept to support the transparency of zcash policy.

Concept of efficiency as it applies to hardware and software in general. Difficulty adjustment algo that works extremely well for all intents and purposes. The way we did the prediction of overwinter was very precise. However much hashpower there is you can say that one piece of hardware is 10x more efficient that another all that matters is the relative amount of hashpower.

AION did this.

Antminer were not realized in the same time. In case of z9 these were sold before they were ready. We planned the production these miners don’t exist that were sold yet. You will not see a spike in l3 like you saw in l3+.

Why has bitmain changed sale model?

Bc we want to be more transparent there’s been a lot of criticism from the community, ppl who are invested in GPUs becomes less meaningful if disrupted . Not to be seen as a threat we changed the model.

Isn’t still a threat in the long term?

If there’s a longer period then GPU miners have enough time to change. We also introduced a cap of one miner per user, you will not see one person buying a lot. Its drastically gradual.

There’s a lot of miners to keep it up more tech folks there’s a 2nd class of gpu miner, gamers, using nicehash, which switches to any algo depending on demand. No maintenance configuration, not asic is less distributed in mining just distributed in different ways.

We reduce the barrier of entry drastically. The z9 mini gets you 10x the power of one gpu at 700 dollars gets you. As long as drastic batches.

My son eliot has a mining card for shooting ppl in fallout he mines zcash.

GPU miners unfortunately seen as really problematic cos video cards have gotten more expensive from the competition it has been a huge issue. Is the community not only zcash or is it also the community of ppl as whole ppl. Do we want to be seen as an enemy of other groups competing for hardware.

They are also really power inefficient. In terms of you’re going to get a lot more, we built we get a little bit more than 10, 000 solutions per second. In terms of power efficiency its almost a ten fold improvement.

GPU miners, disloyal?

I don’t agree to the fact. I don’t know the facts and no one really does. There are miners like that but i don’t know if they’re representative, i do know that there are ppl who mine zcash in venezuela and you can’t import asics there are different kinds of miners and we have to have this uncomfortable process of proceeding in the dark, walking in the dark and it might be uncomfortable, but we do not know and can’t know who is running the asic farms, who is gpu miners, they are disloyal and unwilling to invest, or completely other reasons, so much we don’t know.

We have no evidence one way or another. If you try to characterize ppl doing something like mining you can measure that by individual participants and companies or measure by aggregate hashpower. Then the individuals you control the hashpower are going to be over represented.

If you want distribution enable really good wallets and usefulness so ppl buy and take the zcash from the exchange. It will be in wallets. The % of hashrate to control and do a fork. As long as you’re developing new things for zcash no one is going to fork away.

For a chain split to happen there have to be 2 communities of dev, miners and users who want to do different things, not factions of miners.

Timeline, non committal.

Tentative commitment to a process should i switch from zcash to ethereum or the inverse. Commit to the time on august X we will tell our intention.

Run through the slides. Equihash mining hardware, silicon have most efficient per watt. Our bitmain has been posting public shipment for transparency. Shipped about 80 MH . 500 10x of the hashpower.

Ideally would like to ship right away but doesn’t work that way, we ship as soon as they’re ready.

10% of the hashpower all going to one address.

Similar thing happened to decred hashrate.

Current difficulty is 7.7.8 million 440 million per second.

Daily issuance was taken last night 4th most valuable currency in the way. 1.3 million every day. Who owns that hashpower? ZF has come out for disclosure are you privately mining. This is commercially sensitive information do we have the right to know.
It’s in the interest of large miners to reveal that info if they don’t want the PoW to be changed. Because uncertainty is likely to lead to nervousness and pressure to change the PoW.

But if they’re identified there are regulation concerns. Bitmain had a database hack in august last year, you could become a target.

Aggregate statistics of miners. Easiest way is privacy preserving way how many people have most or some percentage. Minimal amount of info that would be useful to have.

It  it applicable only to asics or gpu. Only for manufacturers.

The question who owns the hashpower is less relevant than the manufacturers because from the practical perspective who is running it is less relevant but for broader q like should is start mining you need to know broader questions as a whole.

Last slide when we talk about PoW and changing it has a lot of ideas. There a chart called master nodes but the left column return on investment number of coins required if you have a certain amount you will share some of the future distribution reward.

Bonding a token to gain some rights isn’t a problem from a security law. Its v different from burn tokens get separate token that issues new token every period.

I’d like to summarize and we can be sure none of these solutions are going to raise a bunch of legal risk.

There are some but if it looks like a security, being a sec is not necessarily a bad thing.

It takes about 6 months and next one will be april, 2 upgrades per year.

In my opinion the earliest the zcash company could support a version of the softer would be April, we’d have to commit to it 9 months earlier.

A PoW change is not the same level as complexity as Sapling.

It’s possible the zcash company could activate earlier than these dates. The way we do things is kind of deliberate. When did we commit to overwinter. October last year. Same moment we commit to activating sapling afterwards. Between 8 and 12 months between doing a thing. If we were going to activate PoW or consensus change we roll back rewind 6 to 9 months to commit and chose to doing other stuff.

Many people have unrealistic idea of how long it takes to do things.

Deadlines we have to commit or we won’t do it. This is one of the most concrete reliable is that the zcash company is slow.

The status quo is same equihash lets say we can never agree even internally in the company.

All the miners are going to commit to asics. Or do we try to open it up to gpu miners.

Is there any dissent to this idea that we can only do things within a period of 6 months.

(miners putting up a hand)

At least 3 months after sapling.

Any proof of work change should be known.

Do you have a duty to miners? Are you entitled to honor their investments?

I do not have a duty to any miner.

From the perspective or maintaining the support of the community.

If we harm ppls investment but also aside from morality it will affect willingness of businesses to invest estimate of predictability. Whether they think the ecosystem.

Risk of asic flooding network.

Good in theory but making asics is a considerable investment. A lot of risk in secret mining. It is only done in manufacturers.

1.4 million per month. 10 mill and 6 months to get in market. If you have a 1 in 14 chance for taking alive for 30 day period it absolutely makes sense for asic in zcash.

Imp factor at stake. Gpu miners will likey become cost inefficient to mine zcash shut down go back to playing fortnight or switch to ethereum. Long before sapling activates gpu miners will have entered that state. The reason why ppl are concerned of the timeline it doesn’t matter how fast they will all be gone by the time we do it.

They can come back. But asic mining is different.

GPU mining is not flexible enough.

If  we wait that long then the majority of miners will be asics and therefore the political landscape changes and we can‘t go back.
Turn into bricks that will hire.

Supposing we focus on something that can be done in 6 months. March

Give an analogy, i can find contract with bodyguard. I can hire a professional bodyguard but only from one religion and sometimes the different religions have rebellions, so the best way to have a bodyguard is a professionals from different background so easy to manage the balance. After 3 months you guys all get fired. What is going to happen? Let’s forget about mining, let’s talk common sense. We are concerned about decentralization, we’re concerned about 51% attack. This issue if you make a transparent ecosystem it won’t happen. If i’m a miner and i can’t sell what is going to happen. I will do anything to get my investment back. 3 months or 2 months what do we want to do. The important thing is to do a reasonable and balanced community and everyone works together.

No duty to any miners.

Best option for march 2018: I think whatever we do will last for a couple of years anyway. For one thing i don’t think PoW is safe and scalable and we will have to find an alternative in a few years anyway.

STATUS QUO:
Not forever
Duty to any miner?

Change to a new EH
Change to new hardware friendly PoW
Change to new memory intensive
Dual PoW system that rewards GPU miners half and ASIC miners half

Hybrid:

Zooko: 80% MR
	20% FF

40% gpus 40% asics, 20% FF

Temporarily GPU friendly still get 40% asic friendly. The general idea is to appeal to both camps. Opposed camps that want each other to fail and cooperating on the same blockchain, that’s my goal.

GPU/CPU friendly. More and less effective ways of doing that there’s not a social contract that this is true indefinitely, the whole concept of PoW is going to fail in a couple of years.

Need to formally apologize that it wasn’t asic resistant.

I agree. That wasn’t what i was thinking at the time but i allowed that to be the public brand by inattention.

The protocol spec bc i thought that was the case.

The intent was asic resistance but i didn’t believe it was possible to have indefinitely,

Mainly motivated by politics could fail cos half is below necessary profit for both sides. It’s a security improvement. In my opinion it is plausible it will turn out to have better security, it needs careful.

I am very worried about the tech risk associated with multi algo PoW it’s not just verge is is technically difficult to do it right.

Augmenting the GPUs to be more competitive with ASICs using net FPAs.

Half of the issuance then what do you do. Dual PoW. one more pitch in favor the problem is technical risk cos its complex and requires care but bright side if we could get this running safely Zcash could be more flexible in the future. We could have hybrid PoS or some other . an advantage of this is it might introduce more flexibility in mining.

In terms of timeline where would it fit on this chart.

For next year scaling improvements consensus protocol in a completely different way and there’s maybe 10x increase in transaction capacity via improvements like that. So far we’ve been doing alternating non-circuit upgrades and circuit upgrades. If we continue that pattern then user issued tokens shielded multisig and privacy by default, removing tx addresses. It would be much easier if we didn’t have to think about PoW.

Proposed roadmap spliciating community feedback on. We can only do a subset of them. Dual poW is harder than just tweaking the algo. I think we can do any of the options by nu2. If we collectively agree to do nothing for the next 6 months.

‘Rainbow pony PoW’

There’s a big difference. The asic advantage on cryptonight equihash . basically we can do something benefitial for GPU miners in short term.

There are asics in development that are highly flexible. Asics only use a little piece of it and also mostly the same flexibility as GPUs. even an algo like that has been come up with so far. And there in development and approaching.

This model is predicated that there is GPU that is ASIC resistance.

Rather than taking a gpu mining algo why not have a process for regular changing.

If the idea is it’s a losing game of GPU accessibility then i understand asic happy but you’re not solving any of the challenges over time .

It doesn’t have the advantage of allowing you to forget about .

Equishash tweak, NU2. new type of PoW, multichain one, i don’t think it fits into timeline, it’s easier than you’re imagining.

Everything that is not status quo means pushing out other priorities that the zcash foundation won’t do.

New multi PoW much higher. I think it take up half of our complexity.

More complicated with equihash in which case it is some sense simplier.

Multi PoW. tweaking equihash, Foundation seems like if we wanted to we could do something by this date. We need to commit to this soon and start doing that instead of other stuff.

It’s long enough for Asic manufacturers to implement before it activates.

Development cycle is longer than ASIC deployment.

If the parameters require so much memory.

Mistake looking at long term equilibrium. One takes one year.

Equilibrium time is very short.

Hardware partnerships. Where does that fit in the timeline.

What happens if ZF vote is ASIC resistance and zcash says not going to change PoW.

Long time frame so that asic manufactures of the world have time to plan the role out. Plan is 2020.

It’s gotta be its cant be it’s gotta be at least 6 months before activation date only after we have proper input and communication there’s conflicting goals there.

If after Sapling no announcements you can assume nothing until that date. If say nothing at sapling nothing will happen before 2019.

Longer.

We have been working way too hard on sapling for way too long but thats coming to an end when its a normal level of work. The crunch is just passed the engineers will become more sane.

We might be better able to make up our minds about shit in the couple of months.

If there are multiple camps with substantial support.

If you chose not to decide you still have made a choice. I think we should consciously chose. You can make this change or publically state we have chosen not to make a change.

We haven’t figured it out yet.

On the hardware side if there was a hardware partnership how long would it take.

From the asic time we try to build strong community as much as possible. There’s a 51% attack but to make the hardware we invested millions of dollars, we don’t want to kill ourselves, we want to work with the community. But if there’s a concern from the community we can work with the community how much asic we’re going make anyone can make it you can buy the asics from us. We don’t just make a miner. We want to design asics.

Fully open source asic layout. Foundaries including designs and layouts. 5 million dollars produce the deisigns no lisencing if you wanted to openly it would .

I originally advocated for equihash and i was too credulous i didn’t know enough about asic production and design and i missed some important things.

Based on our timeline the soonest we can do anything is roughly april less year. The opportunity cost could be lower for tweaking. If we went to brand new that would take a lot of work and might mean there would be less features some say it’s possible some say for not. On top of that that to consider what the foundation are going to do. Currently unknown ballot on asic resistance vote on hardware partnership to developer hardware equipment.
