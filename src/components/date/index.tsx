import React, { FC, Fragment } from 'react';

// TODO: date format configable

export type TDateContent = string | { start?: string; end?: string };

interface Props {
  date?: TDateContent;
}

const Date: FC<Props> = props => {
  const { date } = props;

  if (!date) {
    return null;
  }

  const displayDate =
    typeof date === 'string' ? date : `${date.start} - ${(date as any).end}`;

  return <Fragment>{displayDate}</Fragment>;
};

export default Date;
