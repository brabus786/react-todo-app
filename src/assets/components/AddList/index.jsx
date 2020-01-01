import React,{useState} from "react";
import List from "../List";
import Badge from "../Badge/Badge";
import './AddListButton.scss';
import close from "../../img/close.svg";

const AddListButton = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setselectedColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const onClose = () =>{
        setVisiblePopup(false);
        setInputValue('');
        setselectedColor(colors[0].id);
    };

    const addList = () => {
        if(!inputValue){
            alert('Введите название списка');
            return;
        }
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        onAdd({
            "id": Math.random(),
            "name": inputValue,
             color
        });
        onClose();
    };

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
                <img onClick={onClose} className="close" src={close} alt="img closed"/>
                <input value={inputValue}
                       onChange={e => setInputValue(e.target.value)}
                       className="fild"
                       placeholder="Название папки"
                       type="text"/>

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

                <button onClick={addList} className="button">Добавить</button>

            </div>
            }

        </div>
    )
};

export default AddListButton;

