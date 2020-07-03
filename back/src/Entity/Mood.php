<?php

namespace App\Entity;

use App\Repository\MoodRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MoodRepository::class)
 */
class Mood
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity=UserMoodDate::class, mappedBy="moods")
     */
    private $userMoodDates;

    /**
     * @ORM\ManyToMany(targetEntity=Idea::class, inversedBy="moods")
     */
    private $ideas;

    public function __construct()
    {
        $this->userMoodDates = new ArrayCollection();
        $this->ideas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return Collection|UserMoodDate[]
     */
    public function getUserMoodDates(): Collection
    {
        return $this->userMoodDates;
    }

    public function addUserMoodDate(UserMoodDate $userMoodDate): self
    {
        if (!$this->userMoodDates->contains($userMoodDate)) {
            $this->userMoodDates[] = $userMoodDate;
            $userMoodDate->addMood($this);
        }

        return $this;
    }

    public function removeUserMoodDate(UserMoodDate $userMoodDate): self
    {
        if ($this->userMoodDates->contains($userMoodDate)) {
            $this->userMoodDates->removeElement($userMoodDate);
            $userMoodDate->removeMood($this);
        }

        return $this;
    }

    /**
     * @return Collection|Idea[]
     */
    public function getIdeas(): Collection
    {
        return $this->ideas;
    }

    public function addIdea(Idea $idea): self
    {
        if (!$this->ideas->contains($idea)) {
            $this->ideas[] = $idea;
        }

        return $this;
    }

    public function removeIdea(Idea $idea): self
    {
        if ($this->ideas->contains($idea)) {
            $this->ideas->removeElement($idea);
        }

        return $this;
    }
}