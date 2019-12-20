import React,{useState} from "react";
import List from "../List";
import './AddListButton.scss';

const AddListButton = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    return(
        <div className="add-list">
        <List
            click = {()=> alert('scscsc')}
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
                <h1>hi</h1>
            </div>
            }

        </div>
    )
};

export default AddListButton;

