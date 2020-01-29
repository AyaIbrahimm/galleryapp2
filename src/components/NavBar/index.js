import React from 'react'
// import {Link} from 'react-router-dom'
import {NavBarSec , Logo , LogoText , ULlist , ListItem , Anchor, Line, Dropdown, DropdownContent , DropdownAnchor} from './style.js'



const NavBar=()=>{
    return(
      <React.Fragment>
            <NavBarSec>
         <div className="container">
             {/* <Logo>
                 <LogoText> Wed360 </LogoText>
             </Logo> */}
             <Line/>
            
             <ULlist >
                 <Dropdown>
                 <ListItem><Anchor href="#">360 PLANNER</Anchor></ListItem>               
                 <DropdownContent>
                    <DropdownAnchor href="#">CHECK LIST</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">BUDGETER</DropdownAnchor>
                </DropdownContent>
                </Dropdown>  
                <Dropdown>
                <ListItem><Anchor href="#">HER</Anchor></ListItem> 
                <DropdownContent>
                    <DropdownAnchor href="#">DESIGNERS</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">BRIDAL BOUTIQUE</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">WEDDING DRESSES</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">RINGS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">MAKEUP ARTISTS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">MORE</DropdownAnchor>
                    
                    </DropdownContent>
                </Dropdown> 
                 <Dropdown>
                 <ListItem><Anchor href="#">HIM</Anchor></ListItem> 
                     <DropdownContent>
                     <DropdownAnchor href="#">SUITS</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">HEALTH</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">MEN'S GROOMING</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">FITNESS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">MORE</DropdownAnchor>
                     </DropdownContent>
                      </Dropdown>
                 <Dropdown>
                 <ListItem><Anchor href="#">THE WEDDING</Anchor></ListItem>
                 <DropdownContent>
                 <DropdownAnchor href="#">VENUES</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">OUTDOOR WEDDING VENUES</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">VIDEOGRAPHERS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">PHOTOGRAPHERS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">DJS</DropdownAnchor>
                    <Line />
                    <DropdownAnchor href="#">MORE</DropdownAnchor>

                 </DropdownContent>
                 </Dropdown>
                 
                 <Dropdown>
                 <ListItem><Anchor href="#">VENDORS</Anchor></ListItem>
                 <DropdownContent>
                    <DropdownAnchor href="#">CREATE YOUR PROFILE</DropdownAnchor>
                </DropdownContent>
                </Dropdown>  
                  <Dropdown>
                 <ListItem><Anchor href="#">GALLERY</Anchor></ListItem>
                 <DropdownContent>
                    <DropdownAnchor href="#">WEDDING IDEAS</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">MORE</DropdownAnchor>
                </DropdownContent> 
                 </Dropdown>
                <Dropdown>
                 <ListItem><Anchor href="#">IDEAS & MORE</Anchor></ListItem>
                 <DropdownContent>
                    <DropdownAnchor href="#">TIPS & ETIQUETTE</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">WEDDING OF THE WEEK</DropdownAnchor>
                    <Line/>
                    <DropdownAnchor href="#">MORE</DropdownAnchor>
                </DropdownContent>  
                 </Dropdown>
             </ULlist>
             
               
            
         </div>
        </NavBarSec>
       
      </React.Fragment>
    )
}
export default NavBar;