import './Projects.css'

const Projects = () => {
  return (
    <div>
      <div>
        <h2>Projects</h2>
        <div className="project-wrapper">
          <div className="project-item">
            <h3 className='project-title'>쪼꼬머니</h3>
            <div className='project-instruction'>
              너무나도 어려운 금융! 쉽고 재미있게 금융 상품을 추천해주는 방법은 없을까 고민하던 중, 각자의 특성에 맞는 금융 상품을 추천해주는 웹 서비스를 개발하고자 하였습니다.<br />
              쪼꼬머니는 간단한 설문을 통해 사용자의 금융 성향을 분석하고, 이를 바탕으로 적절한 예적금 상품을 추천해주는 서비스입니다.<br />
              또한 간편하게 금융 상품들을 비교하고, 커뮤니티를 통해 내가 알고 있는 정보들을 공유하며 똑똑한 금융 습관을 만들 수 있습니다.<br />
            </div>
          </div>
          <div className="project-item">
            <h3 className='project-title'>빈 프로젝트</h3>
            <div className='project-instruction'>
              어쩌고저쩌고 <br />
              역할: Frontend/Backend
            </div>
          </div>
          <div className="project-item">
            <h3 className='project-title'>빈 프로젝트</h3>
            <div className='project-instruction'>
              어쩌고저쩌고 <br />
              역할: Frontend/Backend
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects