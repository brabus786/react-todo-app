import React,{useState} from "react";
import List from "../List";
import Badge from "../Badge/Badge";
import './AddListButton.scss';

const AddListButton = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setselectedColor] = useState(colors[0].id);
    console.log(selectedColor);


    return(
        <div className="add-list">
        <List
            click = {()=> setVisiblePopup(true)}
            items={[
                {
                    className:'list-add-button',
                    icon:(
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )
                    ,
                    name: 'Добавить список'
                }
            ]}
        />
            {visiblePopup &&
            <div className="add-list__popup">
                <input className="fild" placeholder="Название папки" type="text"/>

                <div className="add-list__popup-colors">
                    <div className="wrap">
                    {
                        colors.map(
                            (color) =>(
                                <Badge onClick={()=>(setselectedColor(color.id))}
                                       key={color.id}
                                       color={color.name}
                                       className={selectedColor === color.id && 'active'}
                                />
                            )
                        )
                    }
                    </div>
                </div>

                <button className="button">Добавить</button>

            </div>
            }

        </div>
    )
};

export default AddListButton;

