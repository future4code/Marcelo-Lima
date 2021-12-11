import styled from "styled-components";

export const ContainerDiv = styled.div`
    
    
`
export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    h1{
        font-family: courier;
        font-size: 40px;
        color: #69DADB;
        text-align: center;
        margin-top: 50px;
        /* margin-right: 30px; */
    }
    p{
        width: 120px;
    }
    button{
        background: #3D94F6;
        background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
        background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        height: 50px;
        color: #FFFFFF;
        font-family: Courier New;
        width: 120px;
        font-size: 25px;
        -webkit-box-shadow: 1px 1px 20px 0 #000000;
        -moz-box-shadow: 1px 1px 20px 0 #000000;
        box-shadow: 1px 1px 20px 0 #000000;
        text-shadow: 0 1px 10px #000000;
        border: solid #337FED 0;
        cursor: pointer;
        text-align: center;
        margin-top: 100px;
        :hover {
            border: solid #337FED 1px;
            background: #1E62D0;
            background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
            background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            text-decoration: none;
        }
    }
`

export const MainDiv = styled.div`
    
    form{
        display: flex;
        flex-direction: column;
        width: 600px;
        margin: auto;
        margin-top: 150px;
        /* input{
            margin: 10px 0px;
            height: 30px;
            border-radius: 10px;
        } */
        input{
          
        }
        select{
            margin: 10px 0px;
            height: 30px;
            border-radius: 10px;
            background-color: white;
        }
        button{
            background: #3D94F6;
            background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
            background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
            background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
            background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
            background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            height: 50px;
            color: #FFFFFF;
            font-family: Courier New;
            width: 120px;
            font-size: 25px;
            -webkit-box-shadow: 1px 1px 20px 0 #000000;
            -moz-box-shadow: 1px 1px 20px 0 #000000;
            box-shadow: 1px 1px 20px 0 #000000;
            text-shadow: 0 1px 10px #000000;
            border: solid #337FED 0;
            cursor: pointer;
            text-align: center;
            margin: auto;
            :hover {
                border: solid #337FED 1px;
                background: #1E62D0;
                background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
                background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
                background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
                background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
                background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                border-radius: 20px;
                text-decoration: none;
            }
        }
    
    };
    
`