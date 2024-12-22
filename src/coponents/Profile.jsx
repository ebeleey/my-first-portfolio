import './Profile.css'
import Typewriter from 'typewriter-effect';


const Profile = () => {
  return (
    <div>
      <div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        <Typewriter
          options={{
            strings: [
              "프론트엔드 개발자를 꿈꾸는 이다이입니다!"
            ],
            autoStart: true, // 자동 시작 여부
            loop: true, // 반복 여부
            delay: 50, // 타이핑 속도
          }}
        />
      </h1>
    </div>
      </div>

    </div>
  )
}

export default Profile