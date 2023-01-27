package main

import (
	"flag"
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	var count int
	flag.IntVar(&count, "count", 0, "Number of goroutines")
	flag.Parse()
	rand.Seed(7)
	fmt.Printf("Starting %d goroutines. Hit ENTER to start..\n", count)
	fmt.Scanln()
	for i := 1; i <= count; i++ {
		wg.Add(1) // increment the counter by 1
		go fn(i)
	}
	wg.Wait() // for the counter to become zero
	fmt.Println("Completed")
	fmt.Scanln()
}

func fn(id int) {

	fmt.Printf("fn[%d] started\n", id)
	time.Sleep(time.Duration(rand.Intn(20)) * time.Second)
	fmt.Printf("fn[%d] completed\n", id)
	wg.Done() // decrement the counter by 1
}
