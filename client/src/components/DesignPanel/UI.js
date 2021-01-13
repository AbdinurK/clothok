import styled from 'styled-components'

const PanelContent = styled.div`
    height: calc(100% - 46px);
    padding: 5px 15px 15px 15px;
    
    .scrollbar-container {
        overflow: hidden;
        height: calc(100% - 44px);
        position: relative;
    }
    
    .panel-scroll-container {
        max-height: calc(100% - 46px);
    }
    
    .panel-scroll-container .scrollable-content.show-scrollbar {
        padding-right: 10px;
    }
    
    .scrollbar-container .scrollable-content {
        overflow: scroll;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .scrollable-content.for-mac {
        padding: 0 15px 15px 0;
        right: -15px;
        bottom: -15px;
    }
    
    .scrollbar-track {
        position: absolute;
    }
    
    .scrollbar-container .scrollbar-track.vertical {
        width: 4px;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #f1f1f2;
    }
    
    .scrollbar-container .scrollbar-track .scrollbar-thumb {
        border-radius: 4px;
        cursor: pointer;
    }
    
    
`
const Title = styled.div`
    padding: 4px 0;
    margin: 10px 0;
    border-top: 5px;
    background-color: #f2f2f2;
    line-height: 1.6;
    color: #000000;
    text-align: center;
`
const Divider = styled.div`
    width: 30px;
    height: 1px;
    margin: 10px auto;
    background-color: #f1f1f2;
`

export {
    PanelContent,
    Title,
    Divider
}
