$(".//div[@id='Menu'][1]") {
  move_here   ("//div[@id='SideCategoryList']")
  add_class_to(".//li/a", "mw-category-item")
  add_class_to(".//h2",   "mw-category-header")
}

add_class_to(".//div[@id='SearchForm']", "mw-search mw-menu-item") {
  remove("./p") 
  insert_after("div", class: "mw-menu-item" ) {
    insert("i", class: "sprites-menu")    
  }
  $("./form") {
    $("./label") {
      $placeholder_text = text()
    }
    $("./input[@type='text']") {
      attributes(
        placeholder: $placeholder_text,
        type:        "search",
        class:       "mw-search-box"
      )
    }
    remove("./*[not(@type='search')]")
  }

}

add_class_to(".//div[@id='Header']", "mw-menu-wrapper")


hide(".//div[@id='Wrapper']")
hide(".//div[@id='Footer']")