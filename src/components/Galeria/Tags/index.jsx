import styled from "styled-components"
import tags from "./tags.json"



const TagContainer = styled.section`
    display:flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size:24px;
    margin: 0;
`

const BtnTag = styled.button`
    background: rgba(217, 217, 217, 0.3);
    border:2px solid transparent;
    color:#FFFFFF;
    border-radius: 10px ;
    cursor:pointer;
    padding:12px;
    box-sizing:border-box;
    transition: background-color 0.3s ease;
    &:hover{
        border-color: #C98CF1;
    }
`
const Div = styled.div`
    display:flex;
    gap:24px;
    justify-content:end;
`

const Tag = ({SetTag})=>{
    return (
        <TagContainer>
            <TagTitulo>Buscar por tags</TagTitulo>

            <Div >
                {tags.map(tag =>{
                return(
                    <BtnTag  onClick={() => SetTag(tag.tag) } key={tag.id}> {tag.titulo}</BtnTag>
                )
            } )}
            </Div>
            
        </TagContainer>
    )
}

export default Tag