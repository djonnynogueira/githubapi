import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';


export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
    
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = `TabList`;

export const WrapperTab = styled(Tab)`
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    user-selecte: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &.is-selected{
        box-shadow: 5px 3px 9px rgba(0, 0, 0, 0.3);
    }
`;

WrapperTab.tabsRole = `Tab`;

export const WrapperTabPanel = styled(TabPanel)`
    padding: 10px;
    border: 1px solid "#ccc";
   
    display: none;

    &.is-selected{
        display: block;
    }
   

`;
WrapperTabPanel.tabsRole = `TabPanel`;