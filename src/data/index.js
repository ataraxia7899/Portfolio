// 포트폴리오 데이터 통합 export
// 각 데이터 파일을 통합하여 기존 portfolioData 형태로 제공

import { profile } from './profile';
import { skills } from './skills';
import { projects } from './projects';
import { experience } from './experience';

// 기존 portfolioData 형태로 통합 export (하위 호환성 유지)
export const portfolioData = {
  profile,
  skills,
  projects,
  experience
};

// 개별 데이터도 export
export { profile, skills, projects, experience };

export default portfolioData;
