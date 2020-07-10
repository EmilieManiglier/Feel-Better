<?php

namespace App\Entity;

use App\Repository\UserMoodDateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserMoodDateRepository::class)
 */
class UserMoodDate
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $mood_date;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="userMoodDates")
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity=Mood::class, inversedBy="userMoodDates")
     */
    private $moods;

    /**
     * @ORM\Column(type="integer")
     */
    private $budget;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->moods = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getMoodDate();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMoodDate(): ?\DateTimeInterface
    {
        return $this->mood_date;
    }

    public function setMoodDate(\DateTimeInterface $mood_date): self
    {
        $this->mood_date = $mood_date;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
        }

        return $this;
    }

    /**
     * @return Collection|Mood[]
     */
    public function getMoods(): Collection
    {
        return $this->moods;
    }

    public function addMood(Mood $mood): self
    {
        if (!$this->moods->contains($mood)) {
            $this->moods[] = $mood;
        }

        return $this;
    }

    public function removeMood(Mood $mood): self
    {
        if ($this->moods->contains($mood)) {
            $this->moods->removeElement($mood);
        }

        return $this;
    }

    public function getBudget(): ?int
    {
        return $this->budget;
    }

    public function setBudget(int $budget): self
    {
        $this->budget = $budget;

        return $this;
    }
}
