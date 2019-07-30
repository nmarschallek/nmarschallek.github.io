<template>
  <v-app style="margin-top: 0px; background-color: #44546A;">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6 md3>
            <v-card flat color="secondary" style="border-radius: 0px;">
              <v-toolbar flat color="accent">
                <v-toolbar-title style="color: #404040;">Nikolaus Marschallek</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-list two-line color="secondary">
                  <v-list-item
                    hover
                    :href="decode(item.link)"
                    target="_blank"
                    v-for="item in items"
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <font-awesome-icon
                        :icon="[item.prefix, item.icon]"
                        size="3x"
                        :style="{ color: '404040' }"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" style="color: #404040;"></v-list-item-title>
                      <v-list-item-subtitle v-html="decode(item.linkText)" style="color: #404040;"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      {
        title: 'Mobile',
        linkText: 'MDQyNiA4NDEgMjQ2',
        link: 'dGVsOjA0MjY4NDEyNDY=',
        icon: 'phone',
        prefix: 'fas'
      },
      {
        title: 'Email',
        linkText: 'bmlrb2xhdXNAbWFyc2NoYWxsZWsubWU=',
        link: 'bWFpbHRvOm5pa29sYXVzQG1hcnNjaGFsbGVrLm1l',
        icon: 'envelope',
        prefix: 'fas'
      },
      {
        title: 'Website',
        linkText: 'bWFyc2NoYWxsZWsubWU=',
        link: 'aHR0cHM6Ly9tYXJzY2hhbGxlay5tZQ==',
        icon: 'globe-asia',
        prefix: 'fas'
      },
      {
        title: 'Facebook Messenger',
        linkText: 'bS5tZS9uaWttYXJzY2hhbGxlaw==',
        link: 'aHR0cHM6Ly9tLm1lL25pa21hcnNjaGFsbGVr',
        icon: 'facebook-messenger',
        prefix: 'fab'
      },
      {
        title: 'LinkedIn',
        linkText: 'bGlua2VkaW4uY29tL2luL25tYXJzY2hhbGxlaw==',
        link: 'aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vbm1hcnNjaGFsbGVrLw==',
        icon: 'linkedin',
        prefix: 'fab'
      },
      {
        title: 'Github',
        linkText: 'Z2l0aHViLmNvbS9ubWFyc2NoYWxsZWs=',
        link: 'aHR0cHM6Ly9naXRodWIuY29tL25tYXJzY2hhbGxlaw==',
        icon: 'github',
        prefix: 'fab'
      }
    ]
  }),
  methods: {
    decode: (string) => {
      return atob(string)
    }
  }
};
</script>
