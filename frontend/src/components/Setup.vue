<template>

  <mdb-container fluid class="mt-1">
            <mdb-row>
                <mdb-col md="4"></mdb-col>
                <mdb-col md="6"> <h3>{{ msg }}</h3></mdb-col>
                <mdb-col md="2">
                    <mdb-dropdown tag="li">
                        <mdb-dropdown-toggle slot="toggle" tag="a" navLink  waves-fixed>Olá,</mdb-dropdown-toggle>
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
                                                <mdb-icon icon="search" />
                                                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Digite uma palavra chave e tecle enter para buscar" aria-label="Search"/>
                                              </mdb-form-inline>
                                          </mdb-col>
                                          <mdb-col md="4">
                                            <mdb-form-inline class="md-form">
                                              <mdb-btn-group>
                                                Visualizar:
                                                 <mdb-col md="1">
                                                 </mdb-col>
                                                <mdb-btn color="success" size="sm">Freelas</mdb-btn>
                                                <mdb-btn color="grey" size="sm">Usuários</mdb-btn>
                                              </mdb-btn-group>
                                            </mdb-form-inline>
                                          </mdb-col>
                                          <mdb-col md="1">
                                          </mdb-col>
                                          <mdb-col md="2">
                                            <mdb-form-inline class="md-form">
                                              <mdb-btn-group>
                                                <mdb-btn color="success" size="sm">Novo Usuário</mdb-btn>
                                              </mdb-btn-group>
                                            </mdb-form-inline>
                                          </mdb-col>
                                       </mdb-row>

                                    </mdb-container>
                                </v-tab>


                                <v-tab title="Second tab">
                                Second tab content
                                </v-tab>

                                <v-tab title="Third tab">
                                Third tab content
                                </v-tab>
                            </vue-tabs>
                        </mdb-col>
                    </mdb-row>
                </mdb-container>
            </mdb-container>
  </mdb-container>
</template>
<script>
import {mdbContainer,mdbBtn, mdbBtnGroup, mdbRow, mdbCard, mdbInput,mdbCardTitle, mdbFormInline,mdbCardText, mdbCardFooter, mdbCardBody, mdbCardHeader,mdbTab, mdbTabItem, mdbTabContent, mdbTabPane,mdbCol,mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon, mdbTabs } from 'mdbvue';
import {VueTabs, VTab} from 'vue-nav-tabs';
export default {
  name: 'App',
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
    VueTabs,
    VTab,
    mdbInput,
    mdbFormInline,
    mdbBtn,
    mdbBtnGroup,
  },
    data()
    {
        return {
            msg: 'Setup',
            active: 0,
            active2: 0,
            selected: 'radio1',
            options: [
                { text: 'Radio 1', value: 'radio1' },
                { text: 'Radio 3', value: 'radio2' },
                { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
                { text: 'Radio 4', value: 'radio4' }
            ]
        }
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
