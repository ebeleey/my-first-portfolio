import './Profile.css';
import Typewriter from 'typewriter-effect';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-title">
        <p>
          매일 한 걸음 더 나아가는 개발자,
        </p>
        <p>
          <span className="typewriter-container">
            <Typewriter
              options={{
                strings: ["이다이"],
                autoStart: true,
                loop: true,
                delay: 200, // 타이핑 속도
                pauseFor: 5000, // 각 줄 끝난 후 1초 동안 멈춤
              }}
            />
          </span>
          입니다.
        </p>
      </div>
    </div>
  );
};

export default Profile;
