<template>
  <div>
    <b-card no-body class="overflow-hidden" style="width: 100%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://picsum.photos/300/150/?image=41"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="this.data.title">
            <b-card-text>
              {{ this.data.content }}
            </b-card-text>
            <div class="tag-container">
              <b-badge
                v-for="tag in this.data.tags"
                :key="tag.id"
                href="#"
                variant="dark"
                :menu_icon_src="tag.menu_icon_src"
                class="tag-item"
              >
                {{ tag.menu_desc }}
              </b-badge>
            </div>
            <div class="heart-container">
              <font-awesome-icon
                icon="heart"
                class="heart-icon"
              ></font-awesome-icon>
              <span class="heart-count">{{ this.data.likeCount }}</span>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PictureDescription",
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.tag-container {
  margin-top: auto;
}

.tag-item {
  margin-right: 10px;
}

.heart-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.heart-icon {
  margin-left: 5px;
}

.heart-count {
  font-weight: bold;
}
</style>
