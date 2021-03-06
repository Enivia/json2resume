import React, { FC, Fragment } from 'react';
import useResumeConfig from '../../hooks/use-resume-config';
import { formatDate } from '../../utils';

export type TDateContent = string | { start?: string; end?: string };

interface Props {
  date?: TDateContent;
}

const Date: FC<Props> = props => {
  const { date } = props;
  const { section } = useResumeConfig();
  if (!date) {
    return null;
  }

  const formatter = section.date?.formatter || 'yyyy/MM/dd';
  const connector = section.date?.connector || '-';
  const displayDate =
    typeof date === 'string'
      ? formatDate(date, formatter)
      : `${formatDate(date.start, formatter)} ${connector} ${formatDate(
          date.end,
          formatter
        )}`;

  return <Fragment>{displayDate}</Fragment>;
};

export default Date;
