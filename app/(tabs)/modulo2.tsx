//importa diversos componentes nativos do react native
//safe area view: evita que o conteudo fica embaixo de barras do sistema do ifone
//scroww view:pagina de roamento
//text:exibe o texto na tela
//pressable:botão que responde ao toque
//activtyindicator:Componente de carregamento("loading spinner")
//Modal:Janela flutuante("popup")
//View:container generico
//Stylesheet:define estilos CSS em JS
//usestate:importaçao do hook usestate do react para controlar estados locais("como abrir e fechar modal")
//Container:ocupa toda a tela
//contant:espaçamento interno ao conteudo rolado
//Title:com fonte maior e espaçamento
//butonText:botão com margem inferior para separação, cor azul 
//modal over lay: fundo escuro semi transparente para o modal
//ModalContant:caixa branca com cantos arredondados do modal
//modalbutton:botão de fechar com margem acima
import { StyleSheet } from "react-native";
import { SafeAreaView,scrollViel,pressable,text,activtyIndicator,Modal,View,StyleSheet} } from "react-native-safe-area-context";
import { useState } from "react"; 
import { Button } from "@react-navigation/elements";
export defalt function module2()
const[modalvisible,retmodalvisible]=useState(false);
return (<SafeAreaView><scrowview>content<text>stile={stiles.title}'Bem Vindo'</text>
<pressable><Modal><view><view><pressable>onpress={()=> setmodal}style={styles.ButonText}</pressable></view><text></text></view></Modal><text></text></pressable></scrowview></SafeAreaView>)
const styles=StyleSheet.create({Container:{flex:1},content:{padding:20},
    Button:{marginBottom:20},ButonText:{color:'blue'},Title:{fontSize:24,marginBottom:20},
    modalOverlay:{flex:1, justifyContent'center',alignItems'center',backgroundColor'#0000099'},
    modalContent:{backgroundColor:'write, pading:20', borderRadius:20},ModalButton:{git add}})
 