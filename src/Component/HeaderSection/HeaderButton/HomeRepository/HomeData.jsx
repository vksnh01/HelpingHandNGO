import caro1 from "../../../../IMG/caro1.jpg";
import img2 from "../../../../IMG/evan-clark-dpn6K9e1vzY-unsplash.jpg";
import volen from "../../../../IMG/pexels-mikhail-nilov-7474354.jpg";
import adopt from "../../../../IMG/adopt.jpg";
import medical from "../../../../IMG/medical.jpg";

const homeData = [
  {
    id: 1,
    title: "become volenteer",
    content: ` 
Are you passionate about dogs and eager to make a meaningful difference in their lives? Joining our volunteer team offers you the opportunity to become an essential part of our mission to provide love, care, and support to dogs in need. Whether you're an experienced dog handler or simply have a heart full of compassion, there's a place for you here. As a volunteer, you'll have the chance to walk, play with, and socialize our dogs, as well as assist with their basic care needs. Your dedication and kindness can make a world of difference to these deserving animals. Become a volunteer today and experience the joy of giving back to your community while forming unforgettable bonds with our furry friends.
There are so many takers for pedigree dogs. But our Desi Indian breed look upto you.. Make a difference! You will primarily socialize with puppies, cats and dogs in addition to walking the dogs. It’s essential to teach dogs and cats to trust people if they are to find their fur-ever homes. Almost all of our animals are ex-street dogs and cats who have never been indoors and need to learn to feel comfortable around people. We strongly encourage volunteers to spend a month or longer at our rehab facility at anywhere in the world. The more time they spend with the animals,   the close`,
    img: volen,
  },
  {
    id: 2,
    title: "Our Vision",
    content: `   Animal NGO is founded by visionaries who felt the need to build a
    free of cost medical facility for the stray animals where the
    best, most advanced, ethical and highly skilled medical care is
    readily available. Main mission is to connect and empower animal
    protectors to achieve animal rights by advocacy, networking and
    capacity building to create a high-impact which will continually
    address ongoing animal issues.
   `,
    btn: "Donate",
    btnLink: "/donate",
    img: img2,
  },
  {
    id: 3,
    title: "Adopt A Pet",
    content: `  There are not enough homes for all the animals that are born every year. Adopting from a shelter helps weaken the pet overpopulation cycle. Each year 8 to 12 million dogs, cats, puppies and kittens are euthanized because there are simply not enough homes for them. Our shelter offers a variety that you won’t find anywhere else. We have specific breeds and also the greatest mutts you’ll ever find. We have more than 6,000 animals come through our doors every year.If around 1% people will come up then each and every pets will be adopted,their live will be in the safe hand.
   `,
    btn: "Adopt",
    btnLink: "/contact",
    img: adopt,
  },
  {
    id: 4,
    title: "Medical Services",
    content: `  There are so many animals day in & day out that are subjected to cruelty, road rage and medical concerns. helping hand Foundation works towards helping such animals either in our OPD or by admitting them into our facility. Our current set-up in Saharanpur City is our pilot model. We plan to expand our horizon by working on building a larger unit for farm animals, a sanctuary for the old and discarded and a shelter home for the ones who cannot survive on the streets of the citya sanctuary for the old. stray animals at our OPD clinic.
   `,
    btn: null,
    btnLink: "",
    img: medical,
  },
];
const homeRescueData = [
  {
    id: 1,
    title: "Why did we start an animal rescue",
    content:
      "We do not see rescues as a solution; but we can't walk by an injured animal either. While we work on long term solutions, we want to have a setup where we can help animals in need. Also, just by virtue of seeing us care so much for animals, people around us changed. People who used to be apathetic, started calling in rescues and even helping catch animals!",
  },
  {
    id: 1,
    title: "How did we start",
    content:
      "Even before we had started constructing Peepal Farm, our rescue work had started. We were doing basic first aid for animals on the streets. In a lot of cases, if a small injury is attended to in time, infections, large maggot wounds and other complications can be avoided. Then we created space for small, and large animals so more complex cases can recover safely.Initially, we used to call the government vets or take the animals to a clinic, and eventually we setup our own small clinic. In 2023, we setup a trauma center 1.5kms from our farm to do our rescue & recovery work more systematically.",
  },
//   {
//     id: 1,
//     title: "Where are we at now",
//     content: `
//     Rescue team - We have a rescue van for dogs, and a rescue jeep for cows. We also have a "treat on street" program for animals with minor injuries.${(
//       <br />
//     )}

// Trauma center - We have a treatment room for small animals, two OTs for small animals, one OT for large animals, separate treatment area for outpatients and a diagnostics lab.

// Recovery center - It's a safe space for injured animals to heal. We have space to house 30 large animals, and 55 small animals. We use these spaces to help animals recover from injuries and sterilize) before they are released to where they were found, adopted, or - in incurable cases - given a painless death.

// Fostering, Sanctuary & Residents - Animals that can't be released for any reason stay with us till they find forever homes. Some of them have found their forever home here :)
//     `,
//   },
  {
    id: 1,
    title: "Our impact",
    content: `
    More than the impact we create by treating over a 1000 animals a year, we create impact by doing 100+ sterlizations we do every month. Each neutered female dog prevents at least 100 more dogs from a painful life, and a painful death from disease, accident or cruelty.

Also, doing this work lets us give a painless death to animals who didn't get a painless life. For some animals, it is the best gift we can give.

Fostering, Sanctuary & Residents - Animals that can't be released for any reason stay with us till they find forever homes. Some of them have found their forever home here :)
    `,
  },
];
export { homeRescueData, homeData };
