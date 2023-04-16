import './Table.css'
import React, { FC, useEffect } from 'react';

export interface IHeader {
  title: string;
  type: 'string' | 'number' | 'select' | 'check' | 'none';
  selectVariants?: string[];
}

export interface IData {
  [key: string]: any;
}

export interface ISelect {
  value: any,
  values: any[],
}

interface TableProps {
  headers: IHeader[];
  data: IData[];
  onBlur: (props: any) => void;
  onChange: (arrayIndex: number, objectKey: any, value: any) => void;
}

function Table({ headers, data, onBlur, onChange }: React.PropsWithChildren<TableProps>) {
  return (
    <div className='table__container'>
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__row'>
            {headers.map(header =>
              <th key={header.title} className='table__cell table__cell_place_head'>{header.title}</th>
            )}
          </tr>
        </thead>
        <tbody className='table__body'>
          {data &&
            data.map((dataElement, dataIndex) =>
              <tr className='table__row' key={dataIndex}>
                {headers.map((header, headerIndex) => {
                  const [key, value] = Object.entries(dataElement)[headerIndex];
                  return (
                    <td key={headerIndex} className='table__cell'>
                      {header.type === 'string' ?
                        <input type='string' value={value} onBlur={onBlur} onChange={(event) => onChange(dataIndex, key, event.target.value)} /> :
                        header.type === 'number' ?
                          <input type='string' value={value} onBlur={onBlur} onChange={(event) => onChange(dataIndex, key, event.target.value)} /> :
                          header.type === 'select' ?
                            <select value={value} onBlur={onBlur} onChange={(event) => onChange(dataIndex, key, event.target.value)}>
                              {header.selectVariants && header.selectVariants.map(variant =>
                                <option value={variant}>{variant}</option>
                              )}
                            </select> :
                            <input type='string' value={value} onBlur={onBlur} onChange={(event) => onChange(dataIndex, key, event.target.value)} />
                      }
                    </td>
                  )
                }
                )}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;