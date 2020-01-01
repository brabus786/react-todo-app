import React from "react";
import classNames from 'classnames';
import Badge from "../Badge/Badge";

import removeSvg from "../../img/remove.svg";

import './List.scss';

const List = ({items, isRemovablew, click, onRemove}) =>{

    const removeList = item =>{
      if (window.confirm('Вы действительно хотите удалить список ?')){
              onRemove(item);
      }
    };

    return(
        <ul className="list" onClick={click}>

            {items.map((item, index) =>(
                <li key={index} className={classNames(item.className,{active:item.active})}>
                    <i>
                        {item.icon ? (item.icon
                            ) : (<Badge color={item.color} />)}
                    </i>
                    <span>{item.name}</span>
                    {isRemovablew && <img onClick={() => removeList(item)} className="list__remove-icon" src={removeSvg} alt="remove icon"/>}
                </li>
            ))}

        </ul>
    )
};

export default List;