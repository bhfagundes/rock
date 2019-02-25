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
    <mdb-container>
      <mdb-container class="mt-0">
        <mdb-row>
          <mdb-col md="12">
            <vue-tabs>
              <v-tab title="Minha Equipe">
                <mdb-container class="mt-2">
                  <mdb-row>
                    <mdb-col md="5">
                      <mdb-form-inline class="md-form">
                        <mdb-icon icon="search"/>
                        <input
                          class="form-control form-control-sm ml-3 w-75"
                          type="text"
                          placeholder="Digite uma palavra chave e tecle enter para buscar"
                          aria-label="Search"
                        >
                      </mdb-form-inline>
                    </mdb-col>
                    <mdb-col md="4">
                      <mdb-form-inline class="md-form">
                        <mdb-btn-group>Visualizar:
                          <mdb-col md="1"></mdb-col>
                          <mdb-btn color="success" size="sm">Freelas</mdb-btn>
                          <mdb-btn color="grey" size="sm">Usuários</mdb-btn>
                        </mdb-btn-group>
                      </mdb-form-inline>
                    </mdb-col>
                    <mdb-col md="1"></mdb-col>
                    <mdb-col md="2">
                      <mdb-form-inline class="md-form">
                        <mdb-btn-group>
                          <mdb-btn
                            color="success"
                            size="sm"
                             @click="abrirModal()"

                          >Novo Usuário</mdb-btn>
                        </mdb-btn-group>
                      </mdb-form-inline>
                    </mdb-col>
                    <mdb-modal
                      fullHeight
                      position="right"
                      direction="right"
                      v-if="showModal7"
                      @close="showModal7 = false"
                    >
                      <mdb-modal-header>
                        <mdb-modal-title>{{titulo_form}}</mdb-modal-title>
                      </mdb-modal-header>
                      <mdb-modal-body>
                        <form @submit.prevent="salvar">
                        <mdb-input
                          type="text"
                          name="nome"
                          id="nome"
                          label="Nome"
                          v-model="usuario.nome"
                          required
                        />
                        <mdb-input
                          type="email"
                          name="email"
                          id="email"
                          label="E-mail"
                          v-model="usuario.email"
                          required
                        />
                        <div class="float-right">
                          <mdb-btn color="indigo" size="sm">{{btn_salvar}}</mdb-btn>
                        </div>
                        </form>
                      </mdb-modal-body>
                      <mdb-modal-footer></mdb-modal-footer>
                    </mdb-modal>
                  </mdb-row>
                   <mdb-modal v-if="show"  @close="show = false" success>
                    <mdb-modal-header>
                      <mdb-modal-title>Sucesso!</mdb-modal-title>
                      </mdb-modal-header>
                      <mdb-modal-body  class="text-center">
                        <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
                        <p>
                          {{msg_sucesso}}

                        </p>
                      </mdb-modal-body>

                    </mdb-modal>

                  <mdb-row class="my-4">
                    <mdb-col sm="3" v-for="usuario of usuarios" :key="usuario._id">
                      <div @click="editar(usuario)">
                        <mdb-card>
                          <mdb-card-body>
                            <center>
                              <img
                                class="card-img-100 rounded-circle d-flex z-depth-1 mr-3"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                alt="Generic placeholder image"
                              >
                            </center>
                            <mdb-card-text>
                              <b>
                                <center>{{usuario.nome}}</center>
                              </b>
                            </mdb-card-text>
                            <mdb-card-text>
                              <center>{{usuario.email}}</center>
                            </mdb-card-text>
                          </mdb-card-body>
                        </mdb-card>
                      </div>
                      <br>
                    </mdb-col>
                  </mdb-row>
                </mdb-container>
              </v-tab>

              <v-tab title="Second tab">Second tab content</v-tab>

              <v-tab title="Third tab">Third tab content</v-tab>
            </vue-tabs>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </mdb-container>
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
  mounted() {
    this.listar();
  },
  methods: {
    salvar(){
      if(!this.usuario._id){
        Usuarios.salvar(this.usuario).then(resposta => {
          this.listar();
          this.usuario={};
          this.showModal7 = false;
          this.show=true;
        });
      }
      else
      {
          Usuarios.atualizar(this.usuario).then(resposta => {
          this.listar();
          this.usuario={};
          this.showModal7 = false;
          this.show=true;
         });
      }
    },
    listar (){
      Usuarios.listar().then(resposta => {
      this.usuarios = resposta.data;
    });
    },
    editar(usuario)
    {
      this.titulo_form = "Editar Membro";
      this.showModal7 = true;
      this.usuario = usuario;
      this.msg_sucesso = " Usuário alterado com sucesso!";
      this.btn_salvar = "Editar Membro";

    },
    abrirModal()
    {
      this.titulo_form = "Adicionar Membro";
      this.showModal7 = true;
      this.msg_sucesso = " Usuário adicionado com sucesso!";
      this.btn_salvar = "Salvar Membro";
      this.usuario={};
    }
  },
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
      msg: "Setup",
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
