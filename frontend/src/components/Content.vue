<template>
  <mdb-container fluid class="mt-1">
    <mdb-row>
      <mdb-col md="4"></mdb-col>
      <mdb-col md="6">
        <h3>{{ msg }}</h3>
      </mdb-col>
      <mdb-col md="2">
        <mdb-dropdown tag="li">
          <mdb-dropdown-toggle slot="toggle" tag="a" navLink waves-fixed>Olá,</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Action</mdb-dropdown-item>
            <mdb-dropdown-item>Another action</mdb-dropdown-item>
            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
import {
  mdbContainer,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtnGroup,
  mdbMedia,
  mdbMediaBody,
  mdbRow,
  mdbCard,
  mdbInput,
  mdbCardTitle,
  mdbFormInline,
  mdbCardText,
  mdbCardFooter,
  mdbCardBody,
  mdbCardHeader,
  mdbTab,
  mdbTabItem,
  mdbTabContent,
  mdbTabPane,
  mdbCol,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbIcon,
  mdbTabs
} from "mdbvue";
import { VueTabs, VTab } from "vue-nav-tabs";
import Usuarios from "../services/usuarios";
export default {
  name: "App",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
    mdbTabs,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody,
    mdbCardHeader,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    VueTabs,
    VTab,
    mdbInput,
    mdbFormInline,
    mdbBtn,
    mdbBtnGroup,
    mdbMedia,
    mdbMediaBody
  },
  data() {
    return {
      msg: "Content",
      usuarios: [],
      titulo_form: "Novo Membro",
      msg_sucesso : " Usuário adicionado com sucesso!",
      btn_salvar : "Salvar Membro",
      usuario: {
        _id: "",
        nome: "",
        email: ""
      },
      active: 0,
      active2: 0,
      showModal7: false,
      show: false,
      selected: "radio1",
      options: [
        { text: "Radio 1", value: "radio1" },
        { text: "Radio 3", value: "radio2" },
        { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
        { text: "Radio 4", value: "radio4" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
