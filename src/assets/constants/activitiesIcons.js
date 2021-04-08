import React from 'react';

import ChillIcon from '../icons/ChillIcon_base.svg';
import StudyIcon from '../icons/StudyIcon_base.svg';
import OutingIcon from '../icons/OutingIcon_base.svg';

const ActivityIcons = (activity) => {
  switch (activity) {
    case 'study':
      return <StudyIcon />;
    case 'chill':
      return <ChillIcon />;
    case 'outing':
      return <OutingIcon />;
    default:
      return <StudyIcon />;
  }
};

export default ActivityIcons;
