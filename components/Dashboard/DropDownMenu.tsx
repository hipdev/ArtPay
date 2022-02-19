
import { useState, useEffect } from 'react'
import { styled } from '@stitches/react'
import WalletBalance from './WalletBalance';
import { BsPalette, BsPiggyBank } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs'
import Image from 'next/image'


const Main = styled("div", {
  width: '9em',
  position: 'fixed',
  top: 10,
  right: 0,
});

const DropDownContainer = styled("div", {
  width: '9em',
  margin: '0 auto',
  right:0,
});

const DropDownHeader = styled("div", {
  top: 10,
  'margin-bottom': '0.8em',
  background: '#ffffff',
});

const DropDownListContainer = styled("div");

const DropDownList = styled("ul", {
  padding: 0,
  margin: 0,
  'padding-left': '1em',
  background: '#ffffff',
  border: '2px solid #e5e5e5',
  'box-sizing': 'border-box',
  '&:first-child' : '{ padding-top: 0.2em;}',
});

const ListOption = styled("li", {
  textAlign: 'right',
  justifyContent: 'right',
  color: 'Grey',
  fontSize: '0.8em',
  'margin-bottom': '0.2em',
});

const ListItem = styled("li", {
  'list-style': 'none',
  textAlign: 'left',
  color: '#6366F1',
  fontSize: '0.8em',
  'margin-bottom': '0.2em',
});

const options = ["A", "C"];

const DropDownMenu = ({props}) =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("A");
    
    console.log('handleStatusChange:'+props.handleStatusChange);
    const setIsClient = props.handleStatusChange;

    var isClient = props.isClient;

    const toggling = () => setIsOpen(!isOpen);
  
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      isClient = (value=="C");
      setIsOpen(false);
      console.log('sel option:'+selectedOption);
      console.log('isClient:'+props.isClient);
      props.handleStatusChange(isClient);
      /* reload UI with correct dashboard */
    };

    return (
    <Main>
      <DropDownContainer>
          <DropDownHeader onClick={toggling}>
          <button className="flex items-center gap-1">
            <span className="text-sm font-medium">JeyD.eth</span>
            <span className="mx-1">
              <Image
                src="/images/julian.jpg"
                width={32}
                height={32}
                className="rounded-full"
                alt="User image"
              />
            </span>
            <span>
              {selectedOption == "A" ? <BsPalette/> : <BsPiggyBank/> }
            </span>
            <span>
              <BsChevronDown className="text-sm" />
            </span>
            </button>
          </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <WalletBalance/>
              <hr/>
              <ListItem onClick={onOptionClicked('')} >Switch mode</ListItem>
              {options.map(option => (
                <ListOption onClick={onOptionClicked(option)} key={Math.random()}>
                  {option == "A" ? <BsPalette/> : <BsPiggyBank/> }
                </ListOption>
              ))}
              <ListItem onClick={onOptionClicked('')} >Sign Out</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
     </DropDownContainer>
    </Main>
  )
}

export default DropDownMenu; 