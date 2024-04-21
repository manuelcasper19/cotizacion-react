import React, { ReactElement } from 'react';
import './style.css';

interface IDiscountInfoProps {
  label: string;
  value: number;
}

export const DiscountInfo  = ({ label, value }: IDiscountInfoProps ): ReactElement => {
    return (
      <h3 className="discount__info">{label}: $ {value}</h3>
    );
};