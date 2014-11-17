# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()

  add_assets()


  @import "sections/header.ts"
  @import "sections/menu.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"
  remove(".//br")
}
