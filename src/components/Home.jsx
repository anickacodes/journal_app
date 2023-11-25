import "../styles/Home.css";
import psalm from "../assets/91kjvold.jpeg";
import { useState } from "react";

const Home = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="home_container">
      {!imageError ? (
        <img
          id="psalm"
          src={psalm}
          alt="91 He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty."
          onError={handleImageError}
        />
      ) : (
        <article>
          <p>
            <span className="verse-number">1</span> He that dwelleth in the
            secret place of the most High shall abide under the shadow of the
            Almighty.
          </p>
          <p>
            <span className="verse-number">2</span> I will say of the Lord, He
            is my refuge and my fortress: my God; in him will I trust.
          </p>
          <p>
            <span className="verse-number">3</span> Surely he shall deliver thee
            from the snare of the fowler, and from the noisome pestilence.
          </p>
          <p>
            <span className="verse-number">4</span> He shall cover thee with his
            feathers, and under his wings shalt thou trust: his truth shall be
            thy shield and buckler.
          </p>
          <p>
            <span className="verse-number">5</span> Thou shalt not be afraid for
            the terror by night; nor for the arrow that flieth by day;
          </p>
          <p>
            <span className="verse-number">6</span> Nor for the pestilence that
            walketh in darkness; nor for the destruction that wasteth at
            noonday.
          </p>
          <p>
            <span className="verse-number">7</span> A thousand shall fall at thy
            side, and ten thousand at thy right hand; but it shall not come nigh
            thee.
          </p>
          <p>
            <span className="verse-number">8</span> Only with thine eyes shalt
            thou behold and see the reward of the wicked.
          </p>
          <p>
            <span className="verse-number">9</span> Because thou hast made the
            Lord, which is my refuge, even the most High, thy habitation;
          </p>
          <p>
            <span className="verse-number">10</span> There shall no evil befall
            thee, neither shall any plague come nigh thy dwelling.
          </p>
          <p>
            <span className="verse-number">11</span> For he shall give his
            angels charge over thee, to keep thee in all thy ways.
          </p>
          <p>
            <span className="verse-number">12</span> They shall bear thee up in
            their hands, lest thou dash thy foot against a stone.
          </p>
          <p>
            <span className="verse-number">13</span> Thou shalt tread upon the
            lion and adder: the young lion and the dragon shalt thou trample
            under feet.
          </p>
          <p>
            <span className="verse-number">14</span> Because he hath set his
            love upon me, therefore will I deliver him: I will set him on high,
            because he hath known my name.
          </p>
          <p>
            <span className="verse-number">15</span> He shall call upon me, and
            I will answer him: I will be with him in trouble; I will deliver
            him, and honour him.
          </p>
          <p>
            <span className="verse-number">16</span> With long life will I
            satisfy him, and shew him my salvation.
          </p>
        </article>
      )}
    </div>
  );
};

export default Home;
