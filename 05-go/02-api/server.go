package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Product struct {
	Id   int     `json:"id"`
	Name string  `json:"name"`
	Cost float32 `json:"cost"`
}

var products = []Product{
	{Id: 100, Name: "Pen", Cost: 10},
	{Id: 101, Name: "Pencil", Cost: 5},
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello World!")
}

func productsHandler(w http.ResponseWriter, r *http.Request) {
	data, _ := json.Marshal(products)
	w.Write(data)
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/products", productsHandler)
	http.ListenAndServe(":3000", nil)
}
