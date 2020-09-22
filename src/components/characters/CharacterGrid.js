import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ characters, isLoading }) => {
    
    return isLoading ? (
        <Spinner />
    ) : (

    <section className='cards'>
        
        {characters.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
        
    </section>);
}

export default CharacterGrid
