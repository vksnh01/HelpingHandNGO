import React from "react";
import ab from "../../../IMG/petra-bouchalova-iYzQNks7AaI-unsplash.jpg";
import Footer from "../../FooterSection/Footer";

function About() {
  return (
    <>
      <div className="about-main-div">
        <div className="about-card-bg-img">
          <img src={ab} alt="" />
          <div className="about-card-content">
            <h1>About us</h1>
            <h2>voice for the voiceless</h2>
          </div>
        </div>
        <div className="about-section">
          <p>
            <strong style={{ fontSize: "26px" }}>H</strong>elping Hand is a
            stray animal rescue, and an awareness organization, working to help
            animals heal and be heard. Instead of living just because we are
            born, we wanted to live deliberately - in accordance with our
            philosophy of life. We had started doing good because of our
            philosophy; then we learnt it feels great too. <br /> Located in
            District Saharanpur, Uttar Pradesh, India itstarted out as our home
            that we built with space for injured stray animals, for people who
            want to help, and for us to be able to grow our own food. <br />
            On December 9, 2014 we started construction. Instead of putting in a
            swimming pool, we built a cow shed. Instead of an entertainment
            room, we made a clinic. Instead of having master bedrooms, we made
            rooms for those who want to come here and experience a simple, and
            purposeful life. By April 2015, we were operational. In 2016, we
            started a women-powered small scale social enterprise as an effort
            to spread the word about our work. In 2018, we started leveraging
            social media for our awarness work, which till that time had been
            limited to nudging people who were passing through. By 2021, our
            rescue work had outgrown our small clinic, and we started building a
            separate, larger facility for it close to our farm. In 2022, we
            started a sanctuary for permanently disabled equines. On September
            1, 2023 our new animal hospital was operational. Peepal Farm now
            serves as our home office, and foster space for dogs who are looking
            for homes. It is also home to nearly 40 resident animals.
          </p>
          <hr />
          {/* </div>
        <div className="about-section"> */}
          <h1>Why Helping Hand?</h1>
          <p>
            Running on the animal welfare treadmill for some time we had two
            realizations. <br />
            &emsp;&emsp;The only way to bring lasting change is to change how
            people think. Just the way a Peepal tree sprouts on an old building
            un-invited and it's roots form these cracks making space for new
            growth, we wanted to challenge the statu quo making room for fresh
            thought.
            <br />
            &emsp;&emsp;To scale the work at which it needs to done, we need to
            share it. So, we have to involve others, and inspire them to do what
            we are doing. A Peepal tree - as big as it would get - will only
            cover a finite area, but its fruits can be carried by birds and
            other critters to other places, and sprout more trees...covering
            more area, and spreading more seeds.
          </p>
          <hr />
          <h1>Why did we start an animal rescue</h1>
          <p>
            We do not see rescues as a solution; but we can't walk by an injured
            animal either. While we work on long term solutions, we want to have
            a setup where we can help animals in need. Also, just by virtue of
            seeing us care so much for animals, people around us changed. People
            who used to be apathetic, started calling in rescues and even
            helping catch animals!
          </p>
          <hr />
          <h1>How did we start</h1>
          <p>
            Even before we had started constructing Peepal Farm, our rescue work
            had started. We were doing basic first aid for animals on the
            streets. In a lot of cases, if a small injury is attended to in
            time, infections, large maggot wounds and other complications can be
            avoided. <br />
            Then we created space for small, and large animals so more complex
            cases can recover safely. <br />
            Initially, we used to call the government vets or take the animals
            to a clinic, and eventually we setup our own small clinic. In 2023,
            we setup a trauma center 1.5kms from our farm to do our rescue &
            recovery work more
          </p>
          <hr />
          <h1>Our impact</h1>
          <p>
            More than the impact we create by treating over a 1000 animals a
            year, we create impact by doing 100+ sterlizations we do every
            month. Each neutered female dog prevents at least 100 more dogs from
            a painful life, and a painful death from disease, accident or
            cruelty. <br />
            Also, doing this work lets us give a painless death to animals who
            didn't get a painless life. For some animals, it is the best gift we
            can give.
          </p>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
