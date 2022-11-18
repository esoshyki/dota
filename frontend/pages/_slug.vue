<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      categories: [
        { slug: '', name: 'Geography', color: 'rgb(66, 153, 225)' },
        { slug: 'picker', name: 'History', color: 'rgb(236, 201, 75)' },
      ]
    }
  },
  computed: {
    category() {
      return this.categories.find(c => c.slug === this.slug) || {}
    }
  },
  head() {
    return {
      title: this.category.name,
    }
  }
}
</script>