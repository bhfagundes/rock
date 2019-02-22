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
                <mdb-container class="mt-1">
                    <mdb-row>
                        <mdb-col md="12">
                            <vue-tabs>
                                <v-tab title="Minha Equipe">
                                    <mdb-container class="mt-2">
                                        <div style="margin-top:3rem;max-width:20rem">
                                            <mdb-input type="text" label="Input with icon" icon="envelope" />
                                        </div>
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
import {mdbContainer, mdbRow, mdbCard, mdbInput,mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody, mdbCardHeader,mdbTab, mdbTabItem, mdbTabContent, mdbTabPane,mdbCol,mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon, mdbTabs } from 'mdbvue';
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
  },
    data()
    {
        return {
            msg: 'Setup',
            active: 0,
            active2: 0
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
