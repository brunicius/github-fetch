import { BaseSyntheticEvent, SyntheticEvent, useRef } from 'react';
import searchIcon from '../icons/search.png'
import './SearchBox.css'

/* type SearchBoxProps = {
    handleSubmit?: function
} */

function SearchBox(props: any) {
    function handleInputSubmit(e: any) {
        if (e.keyCode == 13) {
            let profileLogin = inputRef.current?.value;

            props.onSubmit(profileLogin);
        }
    }
    function handleSearchIconSubmit(e: any) {
        let profileLogin = inputRef.current?.value;
        props.onSubmit(profileLogin);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="search-box">
            <input onKeyDown={handleInputSubmit} type="text" placeholder="Digite o username aqui..." ref={inputRef}/>
            <div onClick={handleSearchIconSubmit} className='send-button'>
                <img src={searchIcon} alt="" />
            </div>
        </div>
    )
}

export default SearchBox