import React from 'react';

import ChillIcon from '../icons/ChillIcon_base.svg';
import StudyIcon from '../icons/StudyIcon_base.svg';
import OutingIcon from '../icons/OutingIcon_base.svg';

const ActivityIcons = (activity) => {
  switch (activity) {
    case 'study':
      return <StudyIcon key={1} />;
    case 'chill':
      return <ChillIcon key={2} />;
    case 'outing':
      return <OutingIcon key={3} />;
    default:
      return <StudyIcon key={4} />;
  }
};

export default ActivityIcons;
